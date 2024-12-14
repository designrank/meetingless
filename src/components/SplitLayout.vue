<template>
  <section class="whole-page" v-on:click="$emit('globalclick', $event.target)">
    <PageHeader/>
    <section class="dark-side">
      <slot name="dark-side"></slot>
    </section>
    <section class="bright-side">
      <slot name="bright-side"></slot>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";

@Component({
  components: {PageHeader}
})
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
  padding: 10rem 5rem 5rem 5rem;
  color: white;
  border: 0;
}

.bright-side {
  padding: 10rem 2rem 5rem 2rem;
  background-color: white;
  color: black;
}

@media (min-width: 768px) {
  .whole-page {
    display: grid;
    grid-template-areas:
      'header header'
      'left right';
    grid-template-columns: 60% 40%;
    grid-template-rows: max-content 1fr;
    grid-gap: 0;
    min-height: 100vh;
    max-height: 100vh;
    background-color: white;
    //height: 100%;
    width: 100%;
    border: 0;
    margin: 0;
  }

  .page-header {
    grid-area: header;
  }

  .dark-side {
    background-color: #2B3A4A;
    padding: 10rem 5rem 5rem 5rem !important;
    color: white;
    overflow-y: scroll;
    grid-area: left;
    //max-height: 100vh;
    border: 0;
  }

  .bright-side {
    padding: 10rem 2rem 5rem 2rem !important;
    background-color: white;
    color: black;
    overflow-y: scroll;
    grid-area: right;
    //max-height: 100vh;
  }
}

@media (max-width: 768px) {
  .whole-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-width: 100vw;
    background-color: white;
    width: 100%;
    border: 0;
    margin: 0;
  }

  .bright-side, .dark-side {
    padding: 2rem 1rem !important;
  }

  .dark-side {
    background-color: #2B3A4A;
    color: white;
    overflow-x: scroll;
    max-width: 100vw;
  }

  .bright-side {
    background-color: white;
    color: black;
    overflow-x: scroll;
    max-width: 100vw;
  }
}
</style>