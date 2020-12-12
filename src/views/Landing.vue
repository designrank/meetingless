<template>
  <SplitLayout>
    <template slot="dark-side">
      <article>
        <header>
          <h1>Reduce amount of meetings</h1>
        </header>
        <section>
          <p>
            Focus on meeting-free work and enjoy the presence, participation and mindfulness on the really important
            meetings
          </p>
        </section>
        <footer>
          <h5>Get started!</h5>
          <div class="form-group flex-row justify-content-between">
            <a class="btn btn-primary my-2 mr-2" type="button" href="/decision"
               v-on:click.prevent="$router.push('/decision')">
              Decide if the meeting should take place
            </a>
            <a class="btn btn-primary mr-2 my-2" type="button" href="/business-impact"
               v-on:click.prevent="$router.push('/business-impact')">
              See how excessive meetings hurt your business
            </a>
          </div>
        </footer>
      </article>
    </template>
    <template slot="bright-side">
      <article>
        <header>
          <h3>Welcome to the bright side!</h3>
        </header>
        <section>
          <p>
            So you reduced the amount of meetings, now what? <br/>
            How to get things done and be more productive?
          </p>
        </section>
        <article>
          <header>
            <h4>Tools to get things done</h4>
          </header>
          <section>
            <GTDTools/>
          </section>
        </article>
        <article>
          <header>
            <h4>Meeting guidelines</h4>
          </header>
          <section>
            <p>
              Check out our <router-link to="/meeting-guide">productive meeting guide</router-link> for the comprehensive list
              of key points to help making the essential meetings as productive and meaningful as possible.
            </p>
          </section>
        </article>
      </article>
    </template>
  </SplitLayout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SplitLayout from "@/components/SplitLayout.vue";
import GTDTools from "@/components/GTDTools.vue"; // @ is an alias to /src

@Component({
  components: {
    GTDTools,
    SplitLayout,
  },
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
