<template>
  <section class="whole-solid-page">
    <PageHeader/>
    <section class="row main-side">
      <slot name="main-side"></slot>
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
.whole-solid-page {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #2B3A4A;
  border: 0;
  margin: 0;
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
    padding: 2rem !important;
  }
}

</style>