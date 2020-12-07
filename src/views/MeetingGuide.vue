<template>
  <SplitLayout>
    <template slot="dark-side">
      <article>
        <header>
          <h3>Things to avoid</h3>
        </header>
        <section>
          <ul>
            <li>Jogging naked through the local post office</li>
            <li>Consuming sandwiches months  past their expiration date</li>
            <li>Succumbing to the will of alien overlords</li>
          </ul>
        </section>
      </article>
    </template>
    <template slot="bright-side">
      <article>
        <header>
          <h3>Things to embrace</h3>
        </header>
        <section>
          <ul>
            <li>Lying on the beach with a cocktail in one hand and a cold beer in another</li>
            <li>Quietly staring into a distance to pass time while accused of spending yearly income of small island state on sweets and soda</li>
            <li>Conquering the human race and becoming the sole dictator of the known universe</li>
          </ul>
        </section>
      </article>
    </template>
  </SplitLayout>

</template>

<script lang="ts">
import SplitLayout from "@/components/SplitLayout.vue";

export default {
  name: 'MeetingGuide',
  components: {SplitLayout}
};
</script>
