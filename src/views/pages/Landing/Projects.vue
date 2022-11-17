<template>
  <LandingSubPageLayout>
    <template #title>Projects</template>
    <template #contents>
      <div class="project-container">
        <div>asdf</div>
        <CarouselContainer>
          <SwiperSlide><img src="@/assets/images/portfolio5-1.png" />asdf</SwiperSlide>
          <SwiperSlide><img src="@/assets/images/portfolio5-2.png" /></SwiperSlide>
          <SwiperSlide><img src="@/assets/images/portfolio5-3.png" /></SwiperSlide>
          <SwiperSlide><img src="@/assets/images/portfolio5-4.png" /></SwiperSlide>
          <SwiperSlide><img src="@/assets/images/portfolio5-5.png" /></SwiperSlide>
        </CarouselContainer>
      </div>
    </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"
import CarouselContainer from "@/views/components/Carousel/CarouselContainer.vue"
import { SwiperSlide } from "swiper/vue/swiper-vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
    CarouselContainer,
    SwiperSlide,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
}

.swiper-wrapper .swiper-slide > * {
  width: inherit;
  height: inherit;
}
</style>
