<template>
  <ul class="gtd-tools">
    <li class="list-unstyled">
      Async collaborative tools:
      <a href="https://docs.google.com/" target="_blank">Google Docs</a>,
      <a href="https://figma.com/" target="_blank">Figma</a>
    </li>
    <li>
      Show your thinking with
      <a href="https://loom.com/" target="_blank">Loom</a>
    </li>
  </ul>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class GTDTools extends Vue {}
</script>

<style lang="scss">
ul.gtd-tools {
  list-style-type: none;
  padding-left: 0;

  li:before {
    content: "✓";
    color: green;
    margin-left: -10px;
  }
}
</style>