<template>
  <div
    ref="animatorRef"
    class="animator"
    :class="[active ? 'animator-active' : 'animator-deactive', in_range ? 'animator-in-range' : 'animator-outof-range']"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import useScrollY from "@/lib/useScrollY"
import { computed } from "@vue/reactivity"
import { getAnimationTimelineData } from "@/utils/animation_utils"
import { AnimationType } from "@/utils/animation_utils"
// import useIntersectionObserver from "@/lib/useIntersectionObserver"

export default defineComponent({
  props: {
    /**
     * @deprecated
     * use computed section_ref
     */
    sectionRef: {
      type: Object as PropType<() => HTMLElement | undefined>,
      required: true,
    },
    /**
     * @deprecated
     * Intersection Observer가 IOS 사파리에서 주소창 높이가 변경될때 동작하지 않는 이슈로 사용 금지
     */
    active: { type: Boolean, required: true },
    animation: { type: Object as PropType<AnimationType[]>, required: true },
  },
  setup(props) {
    const animatorRef = ref<HTMLElement>()
    const { scrollY } = useScrollY(0)
    const section_ref = computed(() => props.sectionRef())
    const animation_timeline_data = getAnimationTimelineData(props.animation)

    return { animatorRef, scrollY, section_ref, animation_timeline_data }
  },
  mounted: function () {
    this.initializeStartAnimation()
  },
  data() {
    return {
      RAF_timeout: undefined as number | undefined,
      in_range: true,
    }
  },
  methods: {
    /**
     * IOS Safari때문에 Intersection Observer 못씀
     */
    // initialScrollAnimation: function () {
    //   let thresholdSets = []
    //   for (let i = 0; i <= 1.0; i += 0.01) thresholdSets.push(i)

    //   useIntersectionObserver(this.section_ref, { threshold: thresholdSets }, (entries) => {
    //     entries.forEach((entry) => {
    //       if (!this.animatorRef || !this.active) return

    //       if (this.RAF_timeout) {
    //         cancelAnimationFrame(this.RAF_timeout)
    //         this.RAF_timeout = undefined
    //       }

    //       const animatorRef = this.animatorRef
    //       if (!this.section_ref || !animatorRef) return

    //       this.RAF_timeout = requestAnimationFrame(() => {
    //         const scroll_percentage = entry.intersectionRatio * 100

    //         const is_out_of_scroll_range = 0 >= scroll_percentage || scroll_percentage >= 100
    //         if (is_out_of_scroll_range) {
    //           this.in_range = false
    //           if (scroll_percentage <= 0) {
    //             return this.initializeStartAnimation()
    //           } else if (scroll_percentage >= 100) {
    //             return this.initializeEndAnimation()
    //           }
    //         }
    //         this.in_range = true

    //         this.animation_timeline_data.animation_functions.forEach((v) => {
    //           v(scroll_percentage, animatorRef)
    //         })
    //       })
    //     })
    //   })
    // },
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
      console.log("TEST", this.animation_timeline_data.animation_keys)
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
      /**
       * 아래 로직 없을때 퍼포먼스 테스트중
       */
      // if (this.RAF_timeout) {
      //   cancelAnimationFrame(this.RAF_timeout)
      //   this.RAF_timeout = undefined
      // }
      const animatorRef = this.animatorRef
      if (!this.section_ref || !animatorRef) return
      this.RAF_timeout = requestAnimationFrame(() => {
        const scroll_percentage = this.getScrollPercentage(nv)
        const is_out_of_scroll_range = 0 >= scroll_percentage || scroll_percentage >= 100
        if (is_out_of_scroll_range) {
          this.in_range = false
          if (this.animatorRef?.style) Object.assign(this.animatorRef?.style, { willChange: "unset" })
          if (scroll_percentage <= 0) {
            return this.initializeStartAnimation()
          } else if (scroll_percentage >= 100) {
            return this.initializeEndAnimation()
          }
        }

        if (this.animatorRef?.style)
          Object.assign(this.animatorRef?.style, {
            willChange: this.animation_timeline_data.animation_keys.join(","),
          })

        this.in_range = true
        this.animation_timeline_data.animation_functions.forEach((v) => {
          v(scroll_percentage, animatorRef)
        })
      })
    },
  },
  unmounted: function () {
    this.RAF_timeout = undefined
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
  /* &.animator-active {
    will-change: auto;
  }
  &.animator-deactive {
    will-change: unset;
    z-index: -1;
  } */

  &.animator-in-range {
    will-change: auto;
  }
  &.animator-outof-range {
    will-change: unset;
    z-index: -1;
  }
}
</style>
