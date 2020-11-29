<template>
  <SolidLayout>
    <template slot="main-side">
      <!--  Beginning of the questionnaire    -->
      <article v-if="questionProgress.length === 0" class="beginning">
        <header>
          <h3>
            Hi there! Let's check if your
            <InlineDropdown
                ref="nameEdit"
                title="Want to give it a name? Click it!"
                :caption="meetingNameWrapper"
            >
              <input v-model="newMeetingName" class="form-control mb-2" type="text"
                     :placeholder="meetingName || 'enter new name'"/>
              <button class="form-control btn btn-secondary" type="button" @click="nameEdit">
                Change
              </button>
            </InlineDropdown>
            is justified
          </h3>
        </header>
        <section>
          <p>
            Do you really need to hold it?
          </p>
        </section>
        <footer>
          <button class="btn btn-primary" @click="startProcess">Get started!</button>
        </footer>
      </article>

      <!--  Question card    -->
      <article
          v-else-if="latestQuestion.status === questionAction.NONE || latestQuestion.status === questionAction.NO_MEETING">
        <nav class="back-navigation">
          <a href="#" v-on:click.prevent="stepBack()">
            <img src="@/assets/left-arrow.svg" alt="Go to previous question">
          </a>
        </nav>
        <section>
          {{ latestQuestion.question.description }}
        </section>
        <footer>
          <button
              v-if="latestQuestion.question.yesAction !== questionAction.NONE"
              type="button"
              class="btn btn-outline-light px-2 m-3"
              @click="() => actionClick(latestQuestion.question.yesAction)"
          >
            Yes
          </button>
          <button
              v-if="latestQuestion.question.noAction !== questionAction.NONE"
              type="button"
              class="btn btn-outline-light px-2 m-2"
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
          <h3>Your meeting sounds great!</h3>
        </header>
        <section>
          {{ latestQuestion.question.meetingOutcome }}
        </section>
        <footer>
          <button type="button" class="btn btn-primary" @click="$router.push('/')">Go to the main page</button>
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
  components: {InlineDropdown, SolidLayout}
})
export default class Decision extends Vue {
  public readonly questionAction = QuestionAction

  private questionProgress: QuestionTuple[] = []

  private questionLibrary = new QuestionLibrary()

  private newMeetingName = ""

  private meetingName = ""

  private init = true // this is to prevent replacing URL while page just being loaded

  public get meetingNameWrapper() {
    return this.meetingName ? `meeting "${this.meetingName}"` : "upcoming meeting"
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
    if (this.init) return // do not set params if page is just being created - they're there already
    this.setUrlParams()
  }

  @Watch('questionProgress')
  questionProgressChange() {
    if (this.init) return // do not set params if page is just being created - they're there already
    this.setUrlParams()
  }

  mounted() {
    const params = this.$route.query.params

    if (params) this.readUrlParams(params.toString())

    this.init = false
  }

  public readUrlParams(params: string) {
    const dataObject: UrlParams = JSON.parse(atob(params))

    this.meetingName = dataObject.n
    this.questionProgress = dataObject.a
  }

  public setUrlParams() {
    const dataObject: UrlParams = {
      n: this.meetingName,
      a: this.questionProgress
    }

    const dataLine = btoa(JSON.stringify(dataObject))
    const newUrl = this.$route.path + '?params=' + dataLine

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

}
</script>

<style lang="scss" scoped>

.beginning {
  margin-top: 3rem;
}

</style>