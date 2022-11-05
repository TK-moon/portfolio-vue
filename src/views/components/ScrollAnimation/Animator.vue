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
    getSectionVisibility: function () {
      const width = this.section_ref?.offsetWidth ?? 0
      const height = this.section_ref?.offsetHeight ?? 0
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
        const offsetTop = this.section_ref.offsetTop
        const height = this.section_ref.offsetHeight
        const endY = offsetTop + height

        this.RAF_timeout = requestAnimationFrame(() => {
          const section_top_position = nv - offsetTop
          const scroll_percentage = Math.round((100 + (section_top_position / height) * 100) / 2)

          console.log(scroll_percentage)

          // const out_of_section = 0 > scroll_percentage || scroll_percentage > 100

          // if (out_of_section) {
          //   animatorRef.style.opacity = "0"
          //   return
          // }

          // // if (nv > endY) {
          // //   console.log("TEST")
          // //   section.style.opacity = "0"
          // //   return
          // // }

          // if (50 > scroll_percentage) {
          //   // console.log("BEFORE", 1 - (1 - scroll_percentage / 100))
          //   animatorRef.style.opacity = (1 - (1 - scroll_percentage / 100)).toString()
          // } else if (100 > scroll_percentage) {
          //   // console.log("AFTER", 1 - scroll_percentage / 100)
          //   animatorRef.style.opacity = (1 - scroll_percentage / 100).toString()
          // }
          // // section.style.transform = `translateY(${scroll_percentage * -1}px)`
          // animatorRef.style.transform = `matrix(1, 0, 0, 1, 0, ${scroll_percentage * -1})`
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
