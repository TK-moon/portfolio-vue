import { watchEffect } from "vue"

const useIntersectionObserver = (ref: HTMLElement | null, callback: (entries: IntersectionObserverEntry[]) => void): void => {
  const observer = new IntersectionObserver(callback, {})

  watchEffect((onStop) => {
    if (!ref) return

    observer.observe(ref)
    onStop(() => observer.unobserve(ref))
  })
}

export default useIntersectionObserver
