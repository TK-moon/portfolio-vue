<template>
  <Splide :options="{ type: 'loop', perMove: 1, lazyLoad: 'nearby', flickMaxPages: 1, updateOnMove: true, gap: 20 }">
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

  .splide__arrows {
    transition: opacity 200ms ease-in-out;
    @include mobile {
      display: none;
    }
  }
  &:hover {
    .splide__arrows {
      opacity: 1;
    }
  }
  &:not(:hover) {
    .splide__arrows {
      opacity: 0;
    }
  }

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
