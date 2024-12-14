<template>
  <section>
    <PageHeader/>

  <section class="whole-page row">
    <section class="col-12 main-side">
      <slot name="main-side"></slot>
    </section>
  </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";

@Component({
  components: {PageHeader}
})
export default class SolidLayout extends Vue {}
</script>

<style lang="scss">

body {
  background-color: #2B3A4A;
}

.main-side {
  background: radial-gradient(ellipse at bottom center, #5F2E6E 0%, #2B3A4A 20%);
  background-size: 300% 100%;
  background-position: bottom center;
  background-attachment: fixed;
  padding: 5rem 10rem;
  color: white;
}

@media (max-width: 768px) {
  .main-side {
    padding: 2rem 1rem !important;
  }
}

</style>