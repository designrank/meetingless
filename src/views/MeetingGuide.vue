<template>
  <SolidLayout>
    <template slot="main-side">
      <article>
        <header>
          <h1>Key points for focused, meaningful and productive meetings</h1>
        </header>
        <section>
          <h3 class="pt-4">Before the meeting</h3>
          <ul>
            <li>Know exact participants - understand who exactly could help you to address the problem you're trying to solve, or who needs to be involved in the discussion. If uncertain, ask around for more opinions. Keep the list of participants as small as possible as it'd be easier to maintain focus and productive discussion in a small group.</li>
            <li>Have a clear agenda and expectations for the meeting - it will help to keep it structured, running on time and covering all the points you need to highlight.</li>
            <li>Always add a descriptive description and supporting details/materials to the meeting invite - it would help participants be informed about the discussion, reasons and background, and come prepared with relevant knowledge/research.</li>
            <li>Aim to have short meetings - preferably less than one hour. Longer meetings usually mean problem needs additional offline research, and they apply unnecessary pressure on participants as they need to dedicate a larger portion their time and maintain focus. Besides, the longer the meeting the harder it is to schedule.</li>
          </ul>

          <h3 class="pt-4">During the meeting</h3>
          <ul>
            <li>Don't wait for participants who are late - not longer than a few minutes. The time is valuable and those who are late could catch up on what they have missed later. Make sure you (as a host) come early and prepare the meeting space, no matter if it's real or virtual - unexpected problems happen in both, and it's helpful when you could resolve them without wasting group time on it.</li>
            <li>Start meeting with a short overview of the reasons you're having it, suggested agenda and expectations - it will help to get everyone aligned on the reasons and goals and save time on clarifying questions.</li>
            <li>Don't use phone or laptop during the meeting - focusing on the discussion would help you to get better understanding of the problem, and to provide crucial details when required. Being half-present means you're really neither here nor there, as focus is divided between multiple targets.</li>
            <li>If discussion strays off the subject or gets too technical, suggest to park it for later - usually specific or off-topic conversations could be handled in smaller group and even though they're likely important, it's more efficient to maintain focus on main subject and then later switch focus to those additional topics either if meeting time allows or later.</li>
            <li>Make sure everyone has an opportunity to voice their opinion - dedicate some time to ask if anyone has something to add to the conversation, as it could be led by most proactive participants keeping others in shadow, while they might have important insight to share.</li>
            <li>Always summarise the discussion at th the end, clarify next steps and assign responsibilities by the end of teh meeting - it will help to make sure that all participants are aligned with what was discussed and decided, follow up on the outcomes later and have a clear overview to share or refer to later. Having responsibilities detailed and assigned helps making things happen.</li>
          </ul>

          <h3 class="pt-4">After the meeting</h3>
          <ul>
            <li>If it makes sense, share the meeting results with participants and whoever else needs to be informed - it will provide everyone with a reference to what was discussed that they could come back to later or share with others. Also helps maintaining responsibility for a follow-up tasks.</li>
          </ul>
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

</style>
