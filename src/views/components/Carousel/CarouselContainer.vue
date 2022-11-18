<template>
  <Swiper navigation pagination>
    <slot></slot>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper } from "swiper/vue/swiper-vue"

SwiperCore.use([Navigation, Pagination])

export default defineComponent({
  components: {
    Swiper,
  },
  setup() {
    return {
      swiper_modules: [Navigation, Pagination],
    }
  },
})
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  .swiper-wrapper .swiper-slide > * {
    width: inherit;
    height: inherit;
  }
}
</style>
