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
    <button class="swiper-custom-button-prev" @click="controlledSwiper?.slidePrev()">prev</button>
    <button class="swiper-custom-button-next" @click="controlledSwiper?.slideNext()">next</button>
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
  .swiper-wrapper .swiper-slide {
    display: flex;
    height: 100%;
    & > :is(img, div) {
      width: inherit !important;
      height: inherit !important;
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
  transition: opacity 200ms ease-in-out;
}

.swiper-custom-button-prev {
  left: 0;
}

.swiper-custom-button-next {
  right: 0;
}

.swiper:not(:hover) {
  .swiper-custom-button-prev,
  .swiper-custom-button-next {
    opacity: 0;
  }
}
</style>
