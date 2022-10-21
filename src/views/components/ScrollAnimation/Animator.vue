<template>
  <div class="animator" ref="animatorRef">
    <slot></slot>
    {{ active }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import useScrollY from "@/lib/useScrollY"

export default defineComponent({
  props: {
    sectionRef: { type: HTMLElement },
    active: { type: Boolean, required: true },
  },
  setup() {
    const animatorRef = ref<HTMLElement>()
    const { scrollY } = useScrollY(10)
    return { animatorRef, scrollY }
  },
  data() {
    return {}
  },
  watch: {
    scrollY(nv) {
      if (!this.animatorRef || !this.active) return

      let RAFTimeout = null
      if (RAFTimeout) {
        cancelAnimationFrame(RAFTimeout)
      } else {
        const sectionRef = this.sectionRef
        const animatorRef = this.animatorRef

        if (!sectionRef || !animatorRef) return
        const animationElement = animatorRef
        const offsetTop = sectionRef.offsetTop
        const height = sectionRef.offsetHeight
        const endY = offsetTop + height

        RAFTimeout = requestAnimationFrame(() => {
          const diff = nv - offsetTop
          const scroll_percentage = Math.round((diff / height) * 100)

          const out_of_section = 0 > scroll_percentage || scroll_percentage > 100

          if (out_of_section) {
            animationElement.style.opacity = "0"
            return
          }

          // if (nv > endY) {
          //   console.log("TEST")
          //   section.style.opacity = "0"
          //   return
          // }

          if (50 > scroll_percentage) {
            // console.log("BEFORE", 1 - (1 - scroll_percentage / 100))
            animationElement.style.opacity = (1 - (1 - scroll_percentage / 100)).toString()
          } else if (100 > scroll_percentage) {
            // console.log("AFTER", 1 - scroll_percentage / 100)
            animationElement.style.opacity = (1 - scroll_percentage / 100).toString()
          }
          // section.style.transform = `translateY(${scroll_percentage * -1}px)`
          animationElement.style.transform = `matrix(1, 0, 0, 1, 0, ${scroll_percentage * -1})`
        })
      }
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
