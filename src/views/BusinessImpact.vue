<template>
  <SplitLayout>
    <template slot="dark-side">
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
    <template slot="bright-side">

    </template>
  </SplitLayout>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SplitLayout from "../components/SplitLayout.vue";

@Component({
  components: {SplitLayout}
})
export default class BusinessImpact extends Vue {
}
</script>