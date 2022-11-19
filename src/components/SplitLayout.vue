<template>
    <section class="whole-page row" v-on:click="$emit('globalclick', $event.target)">
        <section class="col-7 dark-side">
          <slot name="dark-side"></slot>
        </section>
        <section class="col-5 bright-side">
          <slot name="bright-side"></slot>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SplitLayout extends Vue {}
</script>

<style lang="scss">
.whole-page {
  min-height: 100vh;
  background-color: white;
  height: 100%;
  border: 0;
  margin: 0;
}

.dark-side {
  background-color: #2B3A4A;
  padding: 10rem 5rem 5rem 5rem !important;
  color: white;
  overflow-y: scroll;
  max-height: 100vh;
}

.bright-side {
  padding: 10rem 2rem 5rem 2rem !important;
  background-color: white;
  color: black;
  overflow-y: scroll;
  max-height: 100vh;
}
</style>