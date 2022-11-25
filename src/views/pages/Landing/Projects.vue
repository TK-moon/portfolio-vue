<template>
  <LandingSubPageLayout>
    <template #title>Projects</template>
    <template #contents>
      <div class="project-container">
        <div class="project-wrapper">
          <div class="project-contents">
            <h4 class="project-title">
              1. 포스티 상품목록 필터 기능
              <span><ProjectTag type="business" /></span>
            </h4>
            <p class="project-description">
              포스티 상품목록 페이지에 필터 기능을 추가하였습니다.
              <br />
              React Query를 사용하여 복잡한 코드를 단순화하고, isLoading, isFetching을 이용한 로딩 UI를 구현하였으며,
              queryKey를 이용하여 적절히 데이터를 캐싱하였습니다.
              <br />
              Storybook을 작성하여 협업하는 비개발직군의 코워커들이 컴포넌트의 모든 상태를 확인할 수 있게 하였으며,
              Jest와 React Testing Library를 이용한 테스트 코드를 작성하여 코드의 신뢰도를 높혔습니다.
            </p>
            <p class="project-hashtags">#Next.js #React-Query #Jest #React-Testing-Library</p>
            <ul class="project-link_list">
              <li>포스티 상품목록 | <a>https://posty.kr/categories/871</a></li>
            </ul>
          </div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide>
              <img src="@/assets/images/projects/posty/posty-plp-filter-1.png" alt="포스티 프로젝트 이미지 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/posty/posty-plp-filter-2.png" alt="포스티 프로젝트 이미지 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/posty/posty-plp-filter-3.png" alt="포스티 프로젝트 이미지 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/posty/posty-plp-filter-4.png" alt="포스티 프로젝트 이미지 4" />
            </SwiperSlide>
          </CarouselContainer>
        </div>
        <div class="project-wrapper">
          <div class="project-contents">
            <h4 class="project-title">
              2. 모인 해외송금 서비스 리뉴얼
              <span><ProjectTag type="business" /></span>
            </h4>
            <p class="project-description">
              모인 해외송금 서비스의 개인/법인 랜딩 등의 리뉴얼 프로젝트를 진행하였습니다.<br />
              리팩토링 과정을 거쳐 레거시 코드를 일부 제거하였고, D3.js를 활용하여 3D 지구본 회전, 환율 차트 구현 등의
              작업과 인터랙션 디자인/구현 작업 및 렌더링 최적화를 진행하였습니다.
            </p>
            <p class="project-hashtags">#D3.js #React.js #Typescript #Scroll_Interaction</p>
            <ul class="project-link_list">
              <li>개인 랜딩 | <a>https://themoin.com</a></li>
              <li>법인 랜딩 | <a>https://www.themoin.com/business</a></li>
            </ul>
          </div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide>
              <img src="@/assets/images/projects/moin/portfolio5-1.png" alt="모인 프로젝트 이미지 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/moin/portfolio5-2.png" alt="모인 프로젝트 이미지 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/moin/portfolio5-3.png" alt="모인 프로젝트 이미지 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/moin/portfolio5-4.png" alt="모인 프로젝트 이미지 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="@/assets/images/projects/moin/portfolio5-5.png" alt="모인 프로젝트 이미지 5" />
            </SwiperSlide>
          </CarouselContainer>
        </div>
        <div class="project-wrapper">
          <div class="project-contents">asdf</div>
          <CarouselContainer class="project-carousel">
            <SwiperSlide><img src="@/assets/images/portfolio2-1.png" /></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/portfolio2-2.png" /></SwiperSlide>
          </CarouselContainer>
        </div>
      </div>
    </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { SwiperSlide } from "swiper/vue/swiper-vue"

import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"
import CarouselContainer from "@/views/components/Carousel/CarouselContainer.vue"
import ProjectTag from "@/views/components/ProjectTag.vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
    CarouselContainer,
    SwiperSlide,
    ProjectTag,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.project-container {
  /* Swiper Bug로 Grid 사용 불가 */
  /* display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 10px; */
  & .project-wrapper {
    margin-bottom: 100px;
    &:last-child {
      margin-bottom: unset;
    }
  }
}

.project-wrapper {
  display: flex;
  height: auto;
  flex-direction: row;
  column-gap: 50px;
  @include mobile {
    flex-direction: column;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    @include mobile {
      flex-direction: column;
    }
  }

  .project-contents {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    color: var(--color-primary-text);
    width: 60%;
    /* word-break: keep-all; */
    @include mobile {
      width: 100%;
    }
  }

  .project-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .project-description {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .project-hashtags {
    font-size: 15px;
  }

  .project-link_list {
    padding-left: 10px;
    li {
      list-style-position: inside;
    }
  }

  .project-carousel {
    width: 40%;
    border-radius: 10px;
    background-color: var(--color-lightgrey);
    @include mobile {
      width: 100%;
    }
    img {
      aspect-ratio: 5 / 4;
      object-position: center;
      object-fit: contain;
    }
  }
}
</style>
