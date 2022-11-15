<template>
  <AnimationSection
    disable_multiple_animation
    :animation="[
      { opacity: 0, translate: '0 0' },
      { opacity: 1, translate: '0 -50' },
      { opacity: 0, translate: '0 -100' },
    ]"
    id="about"
  >
    <p>안녕하세요,</p>
    <p>프론트엔드 개발을 하고 있는 문태경입니다.</p>
    <br />
    <p>어제보다 발전하기 위해 링크드인 게시글을 스크랩하고</p>
    <p>Korean FE Article 메일을 구독하여 읽습니다.</p>
    <br />
    <p>벌써 5년차가 되었음에도 매일 새로운 것을 배우며,</p>
    <p>새로운 기술이 나오면 여전히 신기해합니다.</p>
    <br />
    <p>안써봤던 기술을 사용하는건 여전히 무섭지만</p>
    <p>아직까지도 새로운 내용을 배워 업무에 적용하는게 재밌습니다.</p>
    <br />
    <p>5년이나 했는데도 질리지 않는걸 보면</p>
    <p>직업을 잘 고른것 같아요.</p>
  </AnimationSection>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AnimationSection from "@/views/components/ScrollAnimation/AnimationSection.vue"

export default defineComponent({
  components: {
    AnimationSection,
  },
})
</script>

<style lang="scss" scoped>
#about {
  color: var(--color-primary-text);
}
</style>
