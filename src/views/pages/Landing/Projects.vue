<template>
  <LandingSubPageLayout>
    <template #title>Projects</template>
    <template #contents>
      <div class="project-container">
        <div class="project-wrapper">
          <div class="project-contents">asdf</div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide><img src="@/assets/images/portfolio5-1.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-2.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-3.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-4.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-5.png" /></SwiperSlide>
          </CarouselContainer>
        </div>
        <div class="project-wrapper">
          <div class="project-contents">asdf</div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide><img src="@/assets/images/portfolio5-1.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-2.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-3.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-4.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-5.png" /></SwiperSlide>
          </CarouselContainer>
        </div>
        <div class="project-wrapper">
          <div class="project-contents">asdf</div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide><img src="@/assets/images/portfolio5-1.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-2.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-3.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-4.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio5-5.png" /></SwiperSlide>
          </CarouselContainer>
        </div>
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
.project-wrapper {
  display: flex;
  height: auto;
  flex-direction: row;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  .project-contents {
    width: 60%;
  }

  .project-carousel {
    width: 40%;
    border-radius: 10px;
    img {
      aspect-ratio: 5 / 4;
      object-position: center;
      object-fit: cover;
    }
  }
}
</style>
