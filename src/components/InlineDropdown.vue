<template>
<!--  <b-dropdown :id="'dropdown-' + rand" variant='link' :text="caption" class="d-inline" :title="title" v-b-tooltip.hover v-b-tooltip.top v-b-toggle.meetingNameEdit toggle-class="text-decoration-none" no-caret>-->
<!--    <b-dropdown-item class="p-2 adjustable">-->
<!--      <slot/>-->
<!--    </b-dropdown-item>-->
<!--  </b-dropdown>-->

  <div class="dropdown d-inline" v-click-outside="hideDropdown">
          <a
              target="#"
              class="adjustable name-selection"
              v-b-tooltip.hover v-b-tooltip.top v-b-toggle.meetingNameEdit
              :title="title"
              v-on:click.prevent="toggleDropdown"
          >{{caption}}</a>
              <div :class="['dropdown-menu', showEdit ? 'show' : '']">
                <div class="dropdown-item py-2 px-3">
                  <slot/>
                </div>
              </div>
            </div>
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

  private rand = Math.floor(Math.random()*1000)

  public toggleDropdown() {
    this.showEdit = !this.showEdit
  }

  public hideDropdown() {
    this.showEdit = false
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  width: max-content;
}

.adjustable {
  text-decoration: underline dotted;
}

a {
  color: inherit;
  cursor: pointer;
}

a:hover {
  color: lightgrey;
}
</style>