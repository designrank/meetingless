<template>
  <SolidLayout>
    <template slot="main-side">
      <article v-if="!started" class="beginning">
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
      <section v-else>
        &lt;- now this
      </section>
    </template>
  </SolidLayout>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SolidLayout from "../components/SolidLayout.vue";
import InlineDropdown from "@/components/InlineDropdown.vue";

@Component({
  components: {InlineDropdown, SolidLayout}
})
export default class Decision extends Vue {
  private started = false

  private stages = []

  private newMeetingName = ""

  private meetingName = ""

  public get meetingNameWrapper() {
    return this.meetingName ? `meeting "${this.meetingName}"` : "upcoming meeting"
  }

  public nameEdit() {
    this.meetingName = this.newMeetingName
    this.newMeetingName = '';
    (this.$refs.nameEdit as any).toggleDropdown()
  }

  public startProcess() {
    this.started = true
  }
}
</script>

<style lang="scss">

.beginning {
  margin-top: 3rem;
}

</style>