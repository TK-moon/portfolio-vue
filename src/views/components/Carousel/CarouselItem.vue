<template>
  <swiper-slide :swiper-ref="swiper">
    <slot></slot>
  </swiper-slide>
</template>

<script lang="ts">
/**
 * @deprecated
 * swiper 8.x 에서 커스텀 컴포넌트에 slot 사용시 위치가 swiper-wrapper 하위가 아닌 같은 depth로 렌더링되는 버그
 */
import { defineComponent } from "vue"
import { SwiperSlide, useSwiper } from "swiper/vue/swiper-vue"

export default defineComponent({
  components: {
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper()
    return {
      swiper,
    }
  },
})
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
