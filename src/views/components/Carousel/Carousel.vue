<template>
  <Splide :options="{ type: 'loop', perMove: 1, lazyLoad: 'nearby' }">
    <slot></slot>
  </Splide>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Splide } from "@splidejs/vue-splide"

export default defineComponent({
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Splide,
  },
})
</script>

<style lang="scss">
.splide {
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 10px var(--color-shadow);
  background-color: var(--color-lightgrey);
  .splide__track {
    .splide__list {
      .splide__slide {
        display: flex;
        height: 100%;
        & > :is(img, video) {
          width: inherit !important;
          height: inherit !important;
        }
      }
    }
  }

  .splide__pagination {
    .splide__pagination__page.is-active {
      background-color: black;
      opacity: 1;
    }
  }
}
</style>
