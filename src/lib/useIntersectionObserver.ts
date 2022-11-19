import { watchEffect } from "vue"

const useIntersectionObserver = (
  ref: HTMLElement | undefined,
  options: IntersectionObserverInit,
  callback: (entries: IntersectionObserverEntry[]) => void
): void => {
  const observer = new IntersectionObserver(callback, options)

  watchEffect((onStop) => {
    if (!ref) return

    observer.observe(ref)
    onStop(() => observer.unobserve(ref))
  })
}

export default useIntersectionObserver
