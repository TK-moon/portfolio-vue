<template>
  <LandingSubPageLayout>
    <template #title>Career Timeline</template>
    <template #contents>
      <div class="career-section-container">
        <div id="line"></div>
        <ul id="timeline-wrapper">
          <li v-for="i in timeline_data">
            <p class="career-title">{{ i.title }}</p>
            <p class="job-title">{{ i.contents }}</p>
            <p class="job-term">{{ i.datetime }}</p>
          </li>
        </ul>
      </div>
    </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
  },
  data: function () {
    return {
      timeline_data: [
        { title: "카카오스타일", contents: "프론트엔드 개발자", datetime: "2022. 07 -" },
        { title: "모인 해외송금", contents: "프론트엔드 개발자", datetime: "2021. 02 - 2022. 06" },
        { title: "에이아이비드", contents: "프론트엔드 개발자 (정규직)", datetime: "2019. 03 - 2020. 12" },
        { title: "에이아이비드", contents: "프론트엔드 개발자 (프리랜서)", datetime: "2018. 06 - 2019. 03" },
        { title: "안랩", contents: "QA/QC", datetime: "2017. 11 ~ 2018. 05" },
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.career-section-container {
  position: relative;
}

#line {
  position: absolute;
  left: 50%;
  right: 50%;
  translate: -50% 0;
  top: 0;
  bottom: 0;
  width: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-primary-text);
  background: linear-gradient(
    to bottom,
    var(--background-color) 0%,
    var(--color-primary-text) 10%,
    var(--color-primary-text) 90%,
    var(--background-color) 100%
  );
}

#timeline-wrapper {
  color: var(--color-primary-text);
  display: grid;
  grid-auto-flow: row;
  row-gap: 20px;
  max-width: $max-width;
  margin: 0 auto;
  grid-template-columns: 1fr;
  /* border: 1px dashed black; */
  padding: 60px 0;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li:nth-child(odd) {
    justify-self: flex-end;
    margin-right: 50%;
    text-align: right;
    padding-right: 20px;
  }

  li:nth-child(even) {
    justify-self: flex-start;
    margin-left: 50%;
    text-align: left;
    padding-left: 20px;
  }
}

.career-title {
  font-size: 20px;
  font-weight: 600;
  @include mobile {
    font-size: 18px;
  }
}
.job-title {
  font-size: 16px;
  word-break: keep-all;
  @include mobile {
    font-size: 14px;
  }
}

.job-term {
  font-size: 14px;
  color: var(--color-secondary-text);
  @include mobile {
    font-size: 14px;
  }
}
</style>
