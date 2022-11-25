<template>
  <section
    ref="sectionRef"
    class="animation-section"
    :style="{ marginBottom: disable_multiple_animation ? '100vh' : '0' }"
  >
    <Animator :sectionRef="sectionRef" :active="true" :animation="animation">
      <slot></slot>
    </Animator>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import Animator from "./Animator.vue"
import { AnimationType } from "@/utils/animation_utils"
// import useIntersectionObserver from "@/lib/useIntersectionObserver"

export default defineComponent({
  components: { Animator },
  props: {
    animation: { type: Object as PropType<AnimationType[]>, required: true },
    disable_multiple_animation: { type: Boolean },
  },
  setup() {
    const sectionRef = ref<HTMLElement>()
    return { sectionRef }
  },
  data() {
    return {
      /**
       * @note
       * Intersection Observer로 isIntersecting 상태에 따라 active 상태를 조절해서 useScrollY(scroll listner)를 disable 하려고 하였으나,
       * 모바일 디바이스에서 Intersection Observer 동작이 느린 이슈로 사용 불가
       */
      // active: false,
    }
  },
  mounted: function () {
    // useIntersectionObserver(this.sectionRef, { rootMargin: "100px" }, (entries) => {
    //   const entry = entries[0]
    //   this.active = entry.isIntersecting ? true : false
    // })
  },
  unmounted: function () {
    // this.active = false
  },
})
</script>

<style lang="scss" scoped>
.animation-section {
  position: relative;
  height: $contents-height;
  display: flex;
  place-items: center;
}
</style>
