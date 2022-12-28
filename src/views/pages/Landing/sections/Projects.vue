<template>
  <LandingSubPageLayout>
    <template #title>Projects</template>
    <template #contents>
      <div class="project-container">
        <section class="project-wrapper">
          <article class="project-contents">
            <div class="project-title">
              <h3>1. 포스티 상품목록 필터 기능</h3>
              <ProjectTag type="business" />
            </div>
            <div class="project-duration">
              <p>2022.09 ~ 2022.10</p>
            </div>
            <div class="project-description">
              <p>포스티 상품목록 페이지에 필터 기능을 추가하였습니다.</p>
              <p>
                React Query를 사용하여 복잡한 코드를 단순화하고, isLoading, isFetching을 이용한 로딩 UI를 구현하였으며,
                queryKey를 이용하여 적절히 데이터를 캐싱 하였습니다.
              </p>
              <p>
                Storybook을 작성하여 협업하는 비 개발 직군의 코워커들이 Control Panel을 이용하여 컴포넌트의 모든 상태를
                확인할 수 있게 하였으며, Jest와 React Testing Library를 이용한 테스트 코드를 작성하여 코드의 신뢰도를
                높였습니다.
              </p>
            </div>
            <p class="project-hashtags">#Next.js #React-Query #Jest #React-Testing-Library</p>
            <ul class="project-link_list">
              <li>포스티 상품목록 | <Link href="https://posty.kr/categories/871" /></li>
            </ul>
          </article>
          <Carousel class="project-carousel">
            <CarouselItem>
              <img src="@/assets/images/projects/posty/posty-plp-filter-1.png" alt="포스티 프로젝트 이미지 1" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/posty/posty-plp-filter-2.png" alt="포스티 프로젝트 이미지 2" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/posty/posty-plp-filter-3.png" alt="포스티 프로젝트 이미지 3" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/posty/posty-plp-filter-4.png" alt="포스티 프로젝트 이미지 4" />
            </CarouselItem>
            <CarouselItem>
              <video controls preload="none" muted poster="@/assets/images/projects/posty/posty-plp-filter-1.png">
                <source
                  src="https://user-images.githubusercontent.com/59918655/204772931-563a8dcf-7eb1-4b71-a92d-2594576dc425.mp4"
                  type="video/mp4"
                />
              </video>
            </CarouselItem>
          </Carousel>
        </section>
        <section class="project-wrapper">
          <article class="project-contents">
            <div class="project-title">
              <h3>2. 모인 해외송금 서비스 리뉴얼</h3>
              <ProjectTag type="business" />
            </div>
            <div class="project-duration">
              <p>랜딩 : 2021.05 ~ 2021.06</p>
              <p>차트 : 2021.10 ~ 2021.10</p>
            </div>
            <div class="project-description">
              <p>모인 해외송금 서비스의 개인/법인 랜딩 등의 리뉴얼 프로젝트를 진행하였습니다.</p>
              <p>
                랜딩 디자인 개편 프로젝트를 진행하며 리팩토링 과정을 거쳐 레거시 코드를 대폭 제거하였고, GeoJson
                데이터를 TopoJson으로 변경하여 D3.js로 3D Globe 렌더링 및 회전 애니메이션을 구현하였습니다. 이 과정에서
                Request Animation Frame을 이용한 렌더링 최적화 및 Intersection Observer를 활용하여 애니메이션을 트리거
                하여 성능을 최적화하였습니다.
              </p>
              <p>
                D3.js로 환율 데이터를 선 차트로 시각화하고, 데스크탑에서는 hover, 모바일 디바이스에서는 터치 이벤트를
                감지하여 tooltip 이 출력되는 차트를 구현하였습니다.
              </p>
            </div>
            <p class="project-hashtags">#D3.js #React.js #Typescript #Scroll_Interaction #Request_Animation_Frame</p>
            <ul class="project-link_list">
              <li>개인 랜딩 | <Link href="https://themoin.com" /></li>
              <li>법인 랜딩 | <Link href="https://www.themoin.com/business" /></li>
              <li>환율 차트 | <Link href="https://www.themoin.com/currency/info" /></li>
            </ul>
          </article>
          <Carousel class="project-carousel">
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-landing-1.png" alt="모인 랜딩 프로젝트 이미지 1" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-landing-2.png" alt="모인 랜딩 프로젝트 이미지 2" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-landing-3.png" alt="모인 랜딩 프로젝트 이미지 3" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-landing-4.png" alt="모인 랜딩 프로젝트 이미지 4" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-landing-5.png" alt="모인 랜딩 프로젝트 이미지 5" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-chart-1.png" alt="모인 차트 프로젝트 이미지 6" />
            </CarouselItem>
            <CarouselItem>
              <img src="@/assets/images/projects/moin/moin-chart-2.png" alt="모인 차트 프로젝트 이미지 7" />
            </CarouselItem>
            <CarouselItem>
              <video controls preload="none" muted poster="@/assets/images/projects/moin/moin-landing-1.png">
                <source
                  src="https://user-images.githubusercontent.com/59918655/204769802-1d040e73-cf5b-4d47-b395-d15afe3a1b98.mp4"
                  type="video/mp4"
                />
              </video>
            </CarouselItem>
            <CarouselItem>
              <video controls preload="none" muted poster="@/assets/images/projects/moin/moin-chart-1.png">
                <source
                  src="https://user-images.githubusercontent.com/59918655/204771114-c2a132c1-7046-44c0-a129-236a2722ceb4.mp4"
                  type="video/mp4"
                />
              </video>
            </CarouselItem>
          </Carousel>
        </section>
        <section class="project-wrapper">
          <article class="project-contents">
            <div class="project-title">
              <h3>3. 마이크로 프론트엔드 아키텍쳐 구현</h3>
              <ProjectTag type="individual" />
            </div>
            <div class="project-duration">
              <p>2022.02 ~ 2022.02</p>
            </div>
            <div class="project-description">
              <p>Webpack5의 Module Federation Plugin을 이용하여 Micro Frontend Architecture를 구현하였습니다.</p>
              <p>
                하나의 프로젝트가 여러 개의 서비스들을 제공하는 경우, 작은 단위의 변경사항 하나만 있어도 전체를 빌드하고
                배포하는 과정이 비효율적으로 느껴졌습니다.
              </p>
              <p>
                Module Federation Plugin을 이용하면, 하나의 프로젝트를 원하는 단위의 개별 프로젝트로 생성 및 배포할 수
                있다는 점을 알게 되었습니다. 개별 프로젝트들이 공용으로 사용하는 모듈을 부모 컨테이너 앱에서 공유하여
                용량을 줄이도록 구현하였으며, 로컬 개발 환경뿐만 아니라 AWS로 배포하여도 정상적인 라우팅이 가능한 것을
                확인하였습니다.
              </p>
              <p>
                서비스별로 담당하는 팀이 분리되어 있는 조직구조를 가진 회사나, 빌드/배포 속도가 현저히 느린 경우
                현업에서 적용해 보고 싶은 아키텍쳐입니다.
              </p>
            </div>
            <p class="project-hashtags">#Webpack #Module_Federation_Plugin #Webpack_Customizing</p>
            <ul class="project-link_list">
              <li>Github Repository | <Link href="https://github.com/TK-moon/micro-frontend-architecture" /></li>
            </ul>
          </article>
          <Carousel class="project-carousel">
            <CarouselItem>
              <img
                src="@/assets/images/projects/micro-frontend-architecture/webpack5-logo.png"
                alt="마이크로 프론트엔드 아키텍쳐 이미지 1"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="@/assets/images/projects/micro-frontend-architecture/micro-frontend-architecture.png"
                alt="마이크로 프론트엔드 아키텍쳐 이미지 2"
              />
            </CarouselItem>
          </Carousel>
        </section>
      </div>
      <div class="sub-project-container">
        <h2>Sub Projects</h2>
        <ul>
          <li>
            <p class="sub-project-main">
              Vue Scroll Motion | <Link href="https://www.npmjs.com/package/vue-scroll-motion"></Link>
            </p>
            <span class="sub-project-description">
              포트폴리오 제작에 사용된 스크롤 타임라인 애니메이션 라이브러리 제작
            </span>
          </li>
          <li>
            <p class="sub-project-main">Svelte Todo | <Link href="https://github.com/TK-moon/svelte-todo"></Link></p>
            <span class="sub-project-description">Svelte 찍먹</span>
          </li>
          <li>
            <p class="sub-project-main">
              Solana NFT Viewer | <Link href="https://github.com/TK-moon/solana-nft-viewer"></Link>
            </p>
            <span class="sub-project-description">Web3 찍먹</span>
          </li>
        </ul>
      </div>
    </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"
import ProjectTag from "@/views/components/ProjectTag.vue"
import Link from "@/views/components/Link.vue"

import Carousel from "@/views/components/Carousel/Carousel.vue"
import CarouselItem from "@/views/components/Carousel/CarouselItem.vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
    ProjectTag,
    Link,

    Carousel,
    CarouselItem,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.project-container {
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
  @include tablet {
    flex-direction: column;
  }
  @include mobile {
    flex-direction: column;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    @include tablet {
      flex-direction: column;
    }
    @include mobile {
      flex-direction: column;
    }
  }

  .project-contents {
    display: flex;
    flex-direction: column;
    color: var(--color-primary-text);
    width: 60%;
    @include tablet {
      width: 100%;
    }
    @include mobile {
      width: 100%;
    }

    .project-title {
      display: flex;
      align-items: center;
      column-gap: 10px;
      row-gap: 5px;
      flex-wrap: wrap;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .project-duration {
      text-align: right;
      margin-bottom: 20px;
      font-size: 15px;
      color: var(--color-secondary-text);
      @include mobile {
        font-size: 14px;
      }
    }

    .project-description {
      margin-bottom: 20px;
      p {
        font-size: 16px;

        white-space: pre-line;
        word-break: keep-all;
        margin-bottom: 10px;
        @include mobile {
          font-size: 14px;
        }
      }
    }

    .project-hashtags {
      font-size: 15px;
      @include mobile {
        font-size: 12px;
      }
    }
  }

  .project-link_list {
    padding-left: 10px;
    font-size: 16px;
    @include mobile {
      font-size: 14px;
    }
    li {
      list-style-position: inside;
    }
  }

  .project-carousel {
    width: 40%;
    border-radius: 10px;
    overflow: hidden;
    align-self: center;
    @include tablet {
      width: 100%;
    }
    @include mobile {
      width: 100%;
    }
    img {
      aspect-ratio: 5 / 4;
      object-position: center;
      object-fit: contain;
    }
    video {
      width: 100%;
      height: 100%;
      aspect-ratio: 5 / 4;
      object-position: center;
      object-fit: contain;
    }
  }
}

.sub-project-container {
  margin-top: 100px;
  color: var(--color-primary-text);

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
    @include mobile {
      font-size: 15px;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin-bottom: 12px;
    }
  }

  .sub-project-main {
    font-size: 15px;
    word-break: keep-all;
    @include mobile {
      font-size: 12px;
    }
  }

  .sub-project-description {
    font-size: 14px;
    color: var(--color-secondary-text);
    @include mobile {
      font-size: 11px;
    }
  }
}
</style>
