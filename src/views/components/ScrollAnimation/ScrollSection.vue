<template>
  <section ref="sectionRef" class="scroll-section">
    <Animator :sectionRef="sectionRef" :active="true" :animation="animation">
      <slot></slot>
    </Animator>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import Animator from "./Animator.vue"
import useIntersectionObserver from "@/lib/useIntersectionObserver"
import { AnimationType } from "@/utils/animation_utils"

export default defineComponent({
  components: { Animator },
  props: {
    animation: { type: Object as PropType<AnimationType[]>, required: true },
  },
  setup() {
    const sectionRef = ref<HTMLElement>()
    return { sectionRef }
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    handleObserve(entries: IntersectionObserverEntry[]) {
      this.active = entries[0].isIntersecting ? true : false
    },
  },
  mounted: function () {
    useIntersectionObserver(this.sectionRef ?? null, this.handleObserve)
  },
  unmounted: function () {
    this.active = false
  },
})
</script>

<style lang="scss" scoped>
.scroll-section {
  position: relative;
  height: $contents-height;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
