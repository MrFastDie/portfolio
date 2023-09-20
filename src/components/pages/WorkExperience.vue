<script setup lang="ts">
import TimelineWrapper from "../timeline/TimelineWrapper.vue";
import TimelineChildRight from "../timeline/TimelineChildRight.vue";
import TimelineChildLeft from "../timeline/TimelineChildLeft.vue";
</script>

<template>
  <TimelineWrapper>
    <TimelineChildRight date="Nov. 2022 - today" headline="DV Bern AG" :icon='["fas", "gear"]'>
      <strong>Application Developer</strong>
    </TimelineChildRight>

    <TimelineChildLeft date="Dec. 2020 - Okt. 2022" headline="Smart InsurTech AG" :icon='["fas", "gear"]'>
      <strong>Senior Software Developer</strong>
    </TimelineChildLeft>

    <TimelineChildRight date="June 2019 - Nov. 2020" headline="The Creative Club" :icon='["fas", "gear"]'>
      <strong>DevOps Engineer</strong>
    </TimelineChildRight>
  </TimelineWrapper>
</template>
