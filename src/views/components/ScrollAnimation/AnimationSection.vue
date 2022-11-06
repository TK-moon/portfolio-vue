<template>
  <section
    ref="sectionRef"
    class="animation-section"
    :style="{ marginBottom: disable_multiple_animation ? '100vh' : '0' }"
  >
    <Animator :sectionRef="sectionRef" :active="active" :animation="animation">
      <slot></slot>
    </Animator>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import Animator from "./Animator.vue"
import { AnimationType } from "@/utils/animation_utils"

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
      active: false,
    }
  },
  mounted: function () {
    this.active = true
  },
  unmounted: function () {
    this.active = false
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
