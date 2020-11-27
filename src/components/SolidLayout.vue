<template>
  <section class="whole-page row">
    <section class="col-12 main-side">
      <slot name="main-side"></slot>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SolidLayout extends Vue {}
</script>

<style lang="scss">

.main-side {
  background-color: #2B3A4A;
  background: radial-gradient(ellipse at bottom center, #5F2E6E 0%, #2B3A4A 20%);
  background-size: 300% 100%;
  background-position: bottom center;
  padding: 5rem 10rem !important;
  color: white;
}

</style>