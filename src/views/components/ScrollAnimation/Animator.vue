<template>
  <div class="animator" ref="animatorRef">
    <slot></slot>
    {{ active }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import useScrollY from "@/lib/useScrollY"
import { computed } from "@vue/reactivity"
import { getAnimationTimelineData } from "@/utils/animation_utils"
import { AnimationType } from "@/utils/animation_utils"

export default defineComponent({
  props: {
    /**
     * @deprecated
     * use computed section_ref
     */
    sectionRef: { type: HTMLElement },
    active: { type: Boolean, required: true },
    animation: { type: Object as PropType<AnimationType[]>, required: true },
  },
  setup(props) {
    const animatorRef = ref<HTMLElement>()
    const { scrollY } = useScrollY(10)
    const section_ref = computed(() => props.sectionRef)
    const animation_timeline_data = getAnimationTimelineData(props.animation)

    return { animatorRef, scrollY, section_ref, animation_timeline_data }
  },
  mounted: function () {
    this.initializeStartAnimation()
  },
  data() {
    return {
      RAF_timeout: undefined as number | undefined,
    }
  },
  methods: {
    getScrollPercentage: function (current_scroll: number) {
      if (!this.section_ref) {
        return 0
      }
      const section_offset_top = this.section_ref.offsetTop
      const section_offset_height = this.section_ref.offsetHeight
      // const endY = section_offset_top + section_offset_height

      const section_top_position = current_scroll - section_offset_top ?? 0
      const scroll_percentage_with_negative = (section_top_position / section_offset_height) * 100
      const scroll_percentage = Math.round((100 + scroll_percentage_with_negative) / 2)
      return scroll_percentage
    },
    initializeStartAnimation: function () {
      const animation_init_data = this.animation_timeline_data.start_style
      if (this.animatorRef) Object.assign(this.animatorRef.style, animation_init_data)
    },
    initializeEndAnimation: function () {
      const animation_init_data = this.animation_timeline_data.end_style
      if (this.animatorRef) Object.assign(this.animatorRef.style, animation_init_data)
    },
  },
  watch: {
    scrollY(nv) {
      if (!this.animatorRef || !this.active) return

      if (this.RAF_timeout) {
        cancelAnimationFrame(this.RAF_timeout)
        this.RAF_timeout = undefined
      }

      const animatorRef = this.animatorRef
      if (!this.section_ref || !animatorRef) return

      this.RAF_timeout = requestAnimationFrame(() => {
        const scroll_percentage = this.getScrollPercentage(nv)

        if (scroll_percentage <= 0) {
          return this.initializeStartAnimation()
        } else if (scroll_percentage >= 100) {
          return this.initializeEndAnimation()
        }

        this.animation_timeline_data.animation_functions.map((v) => {
          v(scroll_percentage, animatorRef)
        })
      })
    },
    unmounted: function () {
      this.RAF_timeout = undefined
    },
  },
})
</script>

<style lang="scss" scoped>
.animator {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: $full-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
