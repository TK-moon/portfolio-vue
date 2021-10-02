import { ref, onBeforeMount } from "vue"
import { throttle } from "lodash"

interface Ref<T> {
	value: T
}

/**
 * 문서의 수직 방향으로 얼만큼 스크롤 되었는지 px 단위로 반환
 * Lodash Throttle 적용
 *
 * @param wait Default 50
 * @returns window.pageYOffset || window.scrollY
 */
const useScrollY = (wait = 50): { scrollY: Ref<number> } => {
	const scrollY = ref(0)
	const onScroll = () => (scrollY.value = window.pageYOffset || window.scrollY)
	const handleDebouceScroll = throttle(onScroll, wait)

	onBeforeMount(() => window.addEventListener("scroll", handleDebouceScroll))

	return { scrollY }
}

export default useScrollY
