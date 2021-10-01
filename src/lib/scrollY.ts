import { ref, onBeforeMount } from "vue"
import { throttle } from "lodash"

interface Ref<T> {
	value: T
}

const useScrollY = (): { scrollY: Ref<number> } => {
	const scrollY = ref(0)
	const onScroll = () => (scrollY.value = window.pageYOffset || window.scrollY)
	const handleDebouceScroll = throttle(onScroll, 100)

	onBeforeMount(() => window.addEventListener("scroll", handleDebouceScroll))

	return { scrollY }
}

export default useScrollY
