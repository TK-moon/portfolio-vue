<template>
  <section ref="sectionRef" class="scroll-section">
    <Animator :sectionRef="sectionRef" :active="active">
      <slot></slot>
    </Animator>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, CSSProperties } from "vue"
import Animator from "./Animator.vue"
import useIntersectionObserver from "@/lib/useIntersectionObserver"

export default defineComponent({
  components: { Animator },
  props: {
    animation: { type: Array as PropType<CSSProperties[]>, required: true },
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
  mounted() {
    useIntersectionObserver(this.sectionRef ?? null, this.handleObserve)
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
