<template>
  <Swiper
    :navigation="{ prevEl: '.swiper-custom-button-prev', nextEl: '.swiper-custom-button-prev' }"
    :pagination="{ clickable: true }"
    :space-between="20"
    :modules="swiper_modules"
    @_swiper="setControlledSwiper"
    loop
  >
    <slot></slot>
    <button class="swiper-custom-button-prev" @click="controlledSwiper?.slidePrev()">
      <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg" />
    </button>
    <button class="swiper-custom-button-next" @click="controlledSwiper?.slideNext()">
      <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg" />
    </button>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Navigation, Pagination, Controller, Swiper as SwiperType } from "swiper"
import { Swiper } from "swiper/vue/swiper-vue"

export default defineComponent({
  components: {
    Swiper,
  },
  setup() {
    const controlledSwiper = ref<SwiperType>()
    const setControlledSwiper = (swiper: SwiperType) => {
      controlledSwiper.value = swiper
    }

    return {
      swiper_modules: [Navigation, Pagination, Controller],
      controlledSwiper,
      setControlledSwiper,
    }
  },
})
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 10px var(--color-shadow);
  border: 1px solid var(--color-shadow);
  .swiper-wrapper .swiper-slide {
    display: flex;
    height: 100%;
    & > :is(img, div) {
      width: inherit !important;
      height: inherit !important;
    }
  }

  .swiper-custom-button-prev {
    left: 10px;
  }

  .swiper-custom-button-next {
    right: 10px;
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: var(--color-grey);
      transition: background-color 200ms ease-in-out;
      &.swiper-pagination-bullet-active {
        background-color: var(--color-black);
      }
    }
  }

  .swiper-custom-button-prev,
  .swiper-custom-button-next {
    position: absolute;
    top: 50%;
    z-index: 10;
    opacity: 1;
    translate: 0 -50%;
    transition: opacity 200ms ease-in-out, background-color 100ms ease-in-out;
    color: var(--color-grey);
    width: 30px;
    height: 30px;
    border-radius: 100%;
    &:active {
      background-color: rgba($color: #000000, $alpha: 0.2);
    }

    @include mobile {
      display: none;
    }
  }

  &:not(:hover) {
    .swiper-custom-button-prev,
    .swiper-custom-button-next {
      opacity: 0;
    }
  }
}
</style>
