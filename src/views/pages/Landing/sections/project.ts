interface Project {
  title: string
  type: "business" | "individual"
  duration: [Date, Date]
  description_list: string[]
  hashtags: string[]
  link_list: { name: string; url: string }[]
  media_list: { type: "image" | "video"; url: string; alt?: string; poster?: string }[]
}

export const projects: Project[] = [
  {
    title: "포스티 상품목록 필터 기능",
    duration: [new Date(), new Date()],
    description_list: [
      "포스티 상품목록 페이지에 필터 기능을 추가하였습니다.",
      "React Query를 사용하여 복잡한 코드를 단순화하고, isLoading, isFetching을 이용한 로딩 UI를 구현하였으며, queryKey를 이용하여 적절히 데이터를 캐싱 하였습니다.",
      "Storybook을 작성하여 협업하는 비 개발 직군의 코워커들이 Control Panel을 이용하여 컴포넌트의 모든 상태를 확인할 수 있게 하였으며, Jest와 React Testing Library를 이용한 테스트 코드를 작성하여 코드의 신뢰도를 높였습니다.",
    ],
    hashtags: ["Next.js", "React-Query", "Jest", "React-Testing-Library"],
    link_list: [{ name: "포스티 상품목록", url: "https://posty.kr/categories/871" }],
    type: "business",
    media_list: [
      {
        type: "image",
        url: "@/assets/images/projects/posty/posty-plp-filter-1.png",
        alt: "포스티 프로젝트 이미지 1",
      },
      {
        type: "image",
        url: "@/assets/images/projects/posty/posty-plp-filter-2.png",
        alt: "포스티 프로젝트 이미지 2",
      },
      {
        type: "image",
        url: "@/assets/images/projects/posty/posty-plp-filter-3.png",
        alt: "포스티 프로젝트 이미지 3",
      },
      {
        type: "image",
        url: "@/assets/images/projects/posty/posty-plp-filter-4.png",
        alt: "포스티 프로젝트 이미지 4",
      },
      {
        type: "video",
        url: "https://user-images.githubusercontent.com/59918655/204772931-563a8dcf-7eb1-4b71-a92d-2594576dc425.mp4",
        poster: "@/assets/images/projects/posty/posty-plp-filter-1.png",
      },
    ],
  },
]
