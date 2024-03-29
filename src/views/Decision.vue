<template>
  <SolidLayout :key="$route.fullPath">
    <template slot="main-side">
      <!--  Beginning of the questionnaire    -->
      <article v-if="questionProgress.length === 0" class="beginning">
        <header>
          <h3>Received an invite to the meeting you don't think should take place?</h3>
        </header>
        <section>
          <p>
            <button type="button" class="btn btn-primary" v-clipboard="pageUrl">Copy the link</button> to this page and send it to the meeting host
            so they could check if the meeting is really required, and how to make it more clear to participants if it is.
          </p>
        </section>
        <header class="pt-5">
          <h3>
            Received a link to this page from a concerned participant?
          </h3>
        </header>
        <section>
          <p>
            Let's check if your
            <InlineDropdown
                ref="nameEdit"
                title="Want to give it a name? Click it!"
                :caption="meetingNameWrapper"
            >
              <label for="meeting-name-input" class="sr-only">Meeting name</label>
              <input id="meeting-name-input" v-model="newMeetingName" class="form-control mb-2" type="text"
                     :placeholder="meetingName || 'enter new name'"/>
              <button class="form-control btn btn-secondary" type="button" @click="nameEdit">
                Change
              </button>
            </InlineDropdown>
            should take place or the problem could be addressed differently.
          </p>
        </section>
        <footer>
          <button class="btn btn-primary" @click="startProcess">Get started!</button>
        </footer>
      </article>

      <!--  Question card    -->
      <article
          v-else-if="latestQuestion.status === questionAction.NONE || latestQuestion.status === questionAction.NO_MEETING">
        <BackNavigation @navigateBack="stepBack"/>
        <section>
          {{ latestQuestion.question.description }}
        </section>
        <footer>
          <button
              v-if="latestQuestion.question.yesAction !== questionAction.NONE"
              type="button"
              :class="[
                'btn', 'px-4', 'm-2',
                noMeetingSelected(latestQuestion.question.yesAction) ? 'btn-light' : 'btn-outline-light'
              ]"
              @click="() => actionClick(latestQuestion.question.yesAction)"
          >
            Yes
          </button>
          <button
              v-if="latestQuestion.question.noAction !== questionAction.NONE"
              type="button"
              :class="[
                'btn', 'px-4', 'm-2',
                noMeetingSelected(latestQuestion.question.noAction) ? 'btn-light' : 'btn-outline-light'
              ]"
              @click="() => actionClick(latestQuestion.question.noAction)"
          >
            No
          </button>
        </footer>

        <!--  Final decision: No meeting! (part of question card)    -->
        <footer>
          <div v-if="latestQuestion.status === questionAction.NO_MEETING" class="no-meeting">
            {{ latestQuestion.question.noMeetingOutcome }}
          </div>
        </footer>
      </article>

      <!--  Final decision: meeting! (new card)    -->
      <article v-else>
        <header>
          <h3>Your <span v-if="meetingName">"{{ meetingName }}"</span> meeting sounds great!</h3>
        </header>
        <section>
          {{ latestQuestion.question.meetingOutcome }}
        </section>
        <footer>
          <button type="button" class="btn btn-primary m-1" @click="$router.push('/meeting-guide')">See how to make the most of it</button>
          <button type="button" class="btn btn-outline-primary m-1" @click="$router.push('/')">Go to the main page</button>
        </footer>
      </article>
    </template>
  </SolidLayout>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import SolidLayout from "../components/SolidLayout.vue";
import InlineDropdown from "@/components/InlineDropdown.vue";
import {QuestionAction} from "@/models/QuestionAction";
import {QuestionLibrary} from "@/models/QuestionLibrary";
import {Question} from "@/models/Question";
import BackNavigation from "@/components/BackNavigation.vue";

type QuestionTuple = [string, QuestionAction]

interface UrlParams {
  n: string;
  a: QuestionTuple[];
}

interface QuestionStatus {
  question: Question;
  status: QuestionAction;
}

@Component({
  components: {BackNavigation, InlineDropdown, SolidLayout}
})
export default class Decision extends Vue {
  public readonly questionAction = QuestionAction

  private questionProgress: QuestionTuple[] = []

  private questionLibrary = new QuestionLibrary()

  private newMeetingName = ""

  private meetingName = ""

  public get meetingNameWrapper() {
    return this.meetingName ? `meeting "${this.meetingName}"` : "upcoming meeting"
  }

  public get pageUrl() {
    return window.location.href
  }

  public get latestQuestion(): QuestionStatus {
    const questionProgressItem = this.questionProgress[this.questionProgress.length - 1]
    return {
      question: this.questionLibrary.getQuestion(questionProgressItem[0]),
      status: questionProgressItem[1]
    }
  }

  @Watch('meetingName')
  meetingNameChange() {
    this.setUrlParams()
  }

  @Watch('questionProgress')
  questionProgressChange() {
    this.setUrlParams()
  }

  mounted() {
    const params = this.$route.params.settings

    if (params) this.readUrlParams(params.toString())
  }

  public readUrlParams(params: string) {
    const dataObject: UrlParams = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(params)))))

    this.meetingName = dataObject.n
    this.questionProgress = dataObject.a
  }

  public setUrlParams() {
    const dataObject: UrlParams = {
      n: this.meetingName,
      a: this.questionProgress
    }

    const dataLine = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(dataObject)))))
    if (this.$route.params.settings && this.$route.params.settings === dataLine) {
      // it's the same route, no need to update
      return
    }

    const newUrl = '/decision/' + dataLine
    this.$router.push(newUrl)
  }

  public nameEdit() {
    this.meetingName = this.newMeetingName
    this.newMeetingName = '';
    (this.$refs.nameEdit as any).toggleDropdown()
  }

  public startProcess() {
    const questionList = this.questionLibrary.listQuestionIds()
    this.questionProgress.push([questionList[0], QuestionAction.NONE])
  }

  public stepBack() {
    this.questionProgress.pop()
    this.setQuestionProgressStatus(QuestionAction.NONE)
  }

  private setQuestionProgressStatus(status: QuestionAction) {
    if (this.questionProgress.length === 0) return
    const lastQuestionStatus = this.questionProgress[this.questionProgress.length - 1]
    lastQuestionStatus[1] = status
    this.questionProgress.splice(this.questionProgress.length - 1, 1, lastQuestionStatus)
  }

  public actionClick(action: QuestionAction) {
    const question = this.latestQuestion.question
    const questionNext = question.nextAction

    if (action === QuestionAction.NEXT && !questionNext) {
      // it's a meeting!
      this.setQuestionProgressStatus(QuestionAction.MEETING)
      return
    }

    if (action === QuestionAction.NEXT && questionNext) {
      this.setQuestionProgressStatus(action)
      this.questionProgress.push([questionNext, QuestionAction.NONE])
      return;
    }

    if (action === QuestionAction.PREVIOUS) {
      this.stepBack()
      return;
    }

    if (action === QuestionAction.MEETING) {
      this.setQuestionProgressStatus(action)
      return;
    }

    if (action === QuestionAction.NO_MEETING) {
      this.setQuestionProgressStatus(action)
      return;
    }
  }

  public noMeetingSelected(action: QuestionAction) {
    return this.latestQuestion.status === QuestionAction.NO_MEETING && action === QuestionAction.NO_MEETING
  }

}
</script>

<style lang="scss" scoped>

.beginning {
  margin-top: 3rem;
}

</style>