<template>
  <Swiper
    :navigation="{ prevEl: '.swiper-custom-button-prev', nextEl: '.swiper-custom-button-prev' }"
    :pagination="{ clickable: true }"
    :space-between="50"
    :modules="swiper_modules"
    @_swiper="setControlledSwiper"
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
    & > :is(img, div) {
      width: inherit !important;
      height: inherit !important;
    }
  }
}

.swiper-custom-button-prev {
  position: absolute;
  z-index: 10;
  top: 50%;
  translate: 0 -50%;
  left: 0;
}

.swiper-custom-button-next {
  position: absolute;
  z-index: 10;
  top: 50%;
  translate: 0 -50%;
  right: 0;
}
</style>
