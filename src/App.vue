<template>
  <main id="app" class="container-fluid">
    <router-view :key="$route.path"/>
  </main>
</template>

<style lang="scss">

#app {
  font-family: 'Open Sans', sans-serif  !important;
  font-size: 1.3rem;
  padding: 0
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Condensed', monospace !important;
}

article {
  header, footer, section {
    margin-bottom: 2rem;
  }

}
</style>
