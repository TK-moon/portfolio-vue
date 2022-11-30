<template>
  <section :ref="sentinalName">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

interface IntersectionObserverProps {
  isIntersectingElement: boolean
  ratio: null | number
}

export default defineComponent({
  name: "IntersectionObserver",
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
      ratio: null,
    } as IntersectionObserverProps
  },
  watch: {
    isIntersectingElement: function (value) {
      this.$emit("on-intersection-element", value)
    },
    ratio(nv) {
      this.$emit("on-ratio-change", nv)
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalName] as Element

    const handler = (entries: IntersectionObserverEntry[]) => {
      this.ratio = entries[0].intersectionRatio
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true
      } else {
        this.isIntersectingElement = false
      }
    }
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinal)
  },
})
</script>
