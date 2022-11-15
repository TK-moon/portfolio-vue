<template>
  <LandingSubPageLayout>
    <template #title>Career Timeline</template>
    <template #contents>
      <div class="career-section-container">
        <div id="line"></div>
        <ul id="timeline-wrapper">
          <li v-for="i in timeline_data">
            <p>{{ i.datetime }}</p>
            <p>{{ i.title }}</p>
            <p>{{ i.contents }}</p>
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
        { title: "카카오스타일", contents: "프론트엔드 개발자", datetime: "2022. 07 ~" },
        { title: "모인 해외송금", contents: "프론트엔드 개발자", datetime: "2021. 02 ~ 2022. 06" },
        { title: "에이아이비드", contents: "프론트엔드 개발자 (정규직)", datetime: "2019. 03 ~ 2020. 12" },
        { title: "에이아이비드", contents: "프론트엔드 개발자 (프리랜서)", datetime: "2018. 06 ~ 2019. 03" },
        { title: "안랩", contents: "QA/QC", datetime: "2017. 11 ~ 2018. 05" },
        { title: "창성에이스산업", contents: "웹개발자", datetime: "2015. 11 ~ 2016. 02" },
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
  background-color: black;
}

#timeline-wrapper {
  color: var(--color-primary-text);
  display: grid;
  grid-auto-flow: row;
  row-gap: 20px;
  max-width: $max-width;
  margin: 0 auto;
  grid-template-columns: 1fr;
  border: 1px dashed black;
  padding: 40px 0;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li:nth-child(odd) {
    justify-self: flex-end;
    border: 1px solid red;
    margin-right: 50%;
    text-align: right;
  }

  li:nth-child(even) {
    justify-self: flex-start;
    border: 1px solid blue;
    margin-left: 50%;
    text-align: left;
  }
}
</style>
