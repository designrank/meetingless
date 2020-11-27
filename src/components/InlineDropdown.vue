<template>
  <span class="dropdown d-inline">
          <span
              class="adjustable name-selection"
              v-b-tooltip.hover v-b-tooltip.top v-b-toggle.meetingNameEdit
              :title="title"
              @click="toggleDropdown"
          >{{caption}}</span>
              <div :class="['dropdown-menu', 'form-row', showEdit ? 'show' : '']" id="meetingNameEdit">
                <div class="dropdown-item col p-2">
                  <slot/>
                </div>
              </div>
            </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class InlineDropdown extends Vue {
  @Prop({default: ""})
  private title!: string

  @Prop({required: true})
  private caption!: string

  private showEdit = false

  public toggleDropdown() {
    this.showEdit = !this.showEdit
  }
}
</script>
