<script setup lang="ts">
</script>

<template>
  <header class="page-header">
    <a href="https://meetingless.io/">meetingless.io</a>
  </header>
</template>

<style scoped lang="scss">
 .page-header {
    width: 100%;
    padding: 1rem 2rem;
    color: white;
    background-color: #2B3A4A;

    a, a:visited {
      color: white;
    }

    a:hover {
      color: lightgray;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 1rem !important;
    }
  }
</style>