<template>
  <span class="dropdown d-inline">
          <span
              class="adjustable name-selection"
              v-b-tooltip.hover v-b-tooltip.top v-b-toggle.meetingNameEdit
              :title="title"
              @click="toggleDropdown"
          >{{caption}}</span>
              <div :class="['dropdown-menu', showEdit ? 'show' : '']">
                <div class="dropdown-item p-2">
                  <slot/>
                </div>
              </div>
            </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class InlineDropdown extends Vue {
  @Prop({default: "click to change"})
  private title!: string

  @Prop({required: true})
  private caption!: string

  private showEdit = false

  public toggleDropdown() {
    this.showEdit = !this.showEdit
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  width: max-content;
}
</style>