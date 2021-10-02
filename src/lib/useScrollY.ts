import { ref, onBeforeMount } from "vue"
import { throttle } from "lodash"

interface Ref<T> {
	value: T
}

/**
 * 문서의 수직 방향으로 얼만큼 스크롤 되었는지 px 단위로 반환
 * Lodash Throttle 적용
 * @returns { scrollY }
 */
const useScrollY = (): { scrollY: Ref<number> } => {
	const scrollY = ref(0)
	const onScroll = () => (scrollY.value = window.pageYOffset || window.scrollY)
	const handleDebouceScroll = throttle(onScroll, 100)

	onBeforeMount(() => window.addEventListener("scroll", handleDebouceScroll))

	return { scrollY }
}

export default useScrollY
