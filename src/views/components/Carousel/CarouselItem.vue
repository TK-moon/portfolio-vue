<template>
  <SplideSlide>
    <slot></slot>
  </SplideSlide>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { SplideSlide } from "@splidejs/vue-splide"

export default defineComponent({
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    SplideSlide,
  },
})
</script>

<style lang="scss"></style>
