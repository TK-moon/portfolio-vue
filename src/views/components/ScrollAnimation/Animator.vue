<template>
  <div class="animator" ref="animatorRef">
    <slot></slot>
    {{ active }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, CSSProperties, PropType } from "vue"
import useScrollY from "@/lib/useScrollY"
import { computed } from "@vue/reactivity"

export interface AnimationType extends Omit<CSSProperties, "translate"> {
  translateX?: number
  translateY?: number
}

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

    return { animatorRef, scrollY, section_ref }
  },
  mounted: function () {
    /**
     * @TODO
     * this.animation: 애니메이션 타임라인
     * const animation_steps = scroll_percentage / this.animation.length
     * animatoin_steps.forEach((v) => { ... })
     * 배열로 퍼센트 계산하여 애니메이션 Batch
     */
    console.log(this.animation)
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
  },
  watch: {
    scrollY(nv) {
      if (!this.animatorRef || !this.active) return

      if (this.RAF_timeout) {
        cancelAnimationFrame(this.RAF_timeout)
        this.RAF_timeout = undefined
      } else {
        const animatorRef = this.animatorRef

        if (!this.section_ref || !animatorRef) return

        this.RAF_timeout = requestAnimationFrame(() => {
          const scroll_percentage = this.getScrollPercentage(nv)

          const out_of_range = 0 > scroll_percentage || scroll_percentage > 100
          if (out_of_range) {
            animatorRef.style.opacity = "0"
            return
          }

          /**
           * 최상단 엘리먼트는 50부터 시작 -> 보정필요 -> 그냥 animation prop으로 처리
           * 다른 엘리먼트는 0~100 시작
           * 첫번째 엘리먼트와 두번째 엘리먼트가 동시에 존재하는 상황을 허용할건지 정책 결정
           */

          // if (nv > endY) {
          //   console.log("TEST")
          //   section.style.opacity = "0"
          //   return
          // }

          if (50 > scroll_percentage) {
            animatorRef.style.opacity = ((scroll_percentage / 100) * 2).toString()
          } else if (100 > scroll_percentage) {
            animatorRef.style.opacity = (1 - ((scroll_percentage - 50) / 100) * 2).toString()
          }
          // section.style.transform = `translateY(${scroll_percentage * -1}px)`
          animatorRef.style.transform = `matrix(1, 0, 0, 1, 0, ${scroll_percentage * -1})`
        })
      }
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
