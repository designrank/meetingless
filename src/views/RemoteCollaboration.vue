<template>
  <SolidLayout>
    <template slot="main-side">
      <article>
        <header>
          <h1>Ideas for helping remote teams to strive</h1>
        </header>
        <section>
          <h3 class="pt-4">We're all in this together</h3>
          <p>
            Quite often remote teams consist of some people working from the office and some from remote locations, or from another office.
            It's important to maintain equality within the team - if someone is joining remotely, it's a remote team; so it's crucial that there's no clustering of people in the office
            as it causes separation in communication, decision-making and general "us and them" attitude of local group.
          </p>
          <p>
            So even if some people are in one place together, it's more inclusive to still join group meetings separately from own computer,
            not from a meeting room - and that all communication (apart from very task-specific questions) is held online.
            It also simplifies communication and processes as a group of people joining from a meeting room often runs into various organisation,
            communication and technical hiccups.
          </p>

          <h3 class="pt-4">We're remote so we should use it</h3>
          <p>
            One of the benefits of being in your own space is a possibility to focus without unnecessary distractions, which is very important for the <a href="http://www.paulgraham.com/makersschedule.html">maker's schedule</a> productivity.
            This is not unique to the remote teams, but it's more prominent there - so it should be emphasised where possible.
          </p>
          <p>
            One of the options is to have a no-meeting day(s), or do not hold any regular meetings (daily or other team rituals) on certain days -
            for instance, no-meeting Friday, or stand-ups 3 times a week. Expanding distraction-free zones aids deeper concentration on tasks.
          </p>
          <p>
            Another approach is to avoid unnecessary meeting together and maintain online communication where possible - it's easier to share, more inclusive, asynchronous and less distracting.
            Additionally, <router-link to="/business-impact">meetings are expensive</router-link> - but if you think you need one, we have a <router-link to="/decision">decision guide</router-link> and an <router-link to="/meeting-guide">effective meeting guidelines</router-link> to help.
          </p>

          <h3 class="pt-4">We're remote so we're isolated</h3>
          <p>
            Along with benefits, remote work has its problems. One of them is being isolated from your colleagues and not maintaining simple human communication,
            which means team members don't know much about each other and can not form any sort of comradery or closer personal bonds that are important to have engaged and compassionate teams.
          </p>
          <p>
            Several ideas on how to improve that:
            <ul>
              <li>Bring people together - organise team retreat or cross-office visits from once a month to couple of times per year, depending on circumstances.</li>
              <li>If team is willing, hold free-to-join online team gatherings where people could play games, talk to each other and exchange informal news and stories. Alternatively, it could be a random 3-person live calls - random means there would be a variety, and 3 people on call means there's enough but not too much discussion dynamics.</li>
              <li>Have an informal communication channel where team members would share their weekend stories and photos; set a reminder on Monday for everyone to share their weekend update. It helps to see we're all real people living our real lives.</li>
              <li>Conduct an informal interview with each team member about their passions, hobbies, professional and personal history, and share recordings with the team so everyone could learn about everyone. It's also a great aid for newcomers.</li>
            </ul>
          </p>

          <h3 class="pt-4">All work and no play</h3>
          <p>
            Work is exhausting even if it's interesting and engaging, so it's a good idea to recognise that.
            Giving everyone several extra holidays per year helps to give people time to unwind, do what they want and shake off the stress.
            Important that it's a mandatory day off for everyone - so everyone gets out (or stay in) and then maybe share what exciting stuff they did, or maybe just quietly enjoy it.
          </p>

          <h3 class="pt-4">We're all beautiful and unique snowflakes</h3>
          <p>
            There's no shortage of ideas on team work, interpersonal communication, collaboration and productivity.
            And there's nothing unique about how each team works and collaborates, and yet each team is a group of unique individuals with their nuances, specifics and ideas - so you should let them express themselves.
            Try new collaboration ideas, let team members suggest new ways of doing things, support them to try it (even if the rest of the team is not thrilled), and put it on team discussion afterwards.
          </p>

        </section>
      </article>
    </template>
  </SolidLayout>

</template>

<script lang="ts">

import SolidLayout from "@/components/SolidLayout.vue";

export default {
  name: 'MeetingGuide',
  components: {SolidLayout}
};
</script>

<style lang="scss" scoped>
p {
  text-indent: 1em;
}
</style>
