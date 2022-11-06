import { CSSProperties } from "vue"

export interface AnimationType extends Omit<CSSProperties, "translate"> {
  translateX?: number
  translateY?: number
}

interface ScrollAnimationDataType {
  percentage: {
    from: number
    to: number
  }
  animation: {
    from: AnimationType
    to: AnimationType
  }
}

const generateScrollTimeline = (animation: AnimationType[]) => {
  const data = animation.reduce<ScrollAnimationDataType[]>((acc, item, index) => {
    if (index === 0) return acc

    const last_item_of_acc = acc[acc.length - 1]

    const from = last_item_of_acc ? last_item_of_acc.percentage.to : 0
    const to = (100 / (animation.length - 1)) * index

    const from_animation = last_item_of_acc ? last_item_of_acc.animation.to : animation[0]
    const to_animation = item

    return [
      ...acc,
      {
        percentage: { from: from, to: to },
        animation: { from: from_animation, to: to_animation },
      },
    ]
  }, [])
  return data
}

const generateScrollAnimationFunctionsByScrollTimeline = (
  animation_data: ReturnType<typeof generateScrollTimeline>
) => {
  return animation_data.map((v, index) => {
    const style_keys = Object.keys(v.animation.to)

    return (scroll_percentage: number, element: HTMLElement) => {
      const in_range = v.percentage.from <= scroll_percentage && scroll_percentage < v.percentage.to
      if (!in_range) return

      const scroll = scroll_percentage * animation_data.length
      const section_scroll_percentage = scroll - index * 100

      if (style_keys.includes("opacity")) {
        if (v.animation.from.opacity === undefined || v.animation.to.opacity === undefined) {
          throw new Error("test")
        }

        if (v.animation.from.opacity > v.animation.to.opacity) {
          const opacity = 1 - section_scroll_percentage / 100
          element.style.opacity = opacity.toString()
        } else {
          const opacity = section_scroll_percentage / 100
          element.style.opacity = opacity.toString()
        }
      }

      if (style_keys.includes("translateX") || style_keys.includes("translateY")) {
        if (v.animation.from.translateY === undefined || v.animation.to.translateY === undefined) {
          throw new Error("test")
        }

        const before_y = v.animation.from.translateY
        const translate_y = v.animation.to.translateY * (section_scroll_percentage / 100) + before_y

        element.style.translate = `${0} ${translate_y}px`
      }
    }
  })
}

type AnimationFunctionType = (scroll_percentage: number, element: HTMLElement) => void

export const getAnimationTimelineData = (animation: AnimationType[]): AnimationFunctionType[] => {
  const scroll_timeline_data = generateScrollTimeline(animation)
  console.log(scroll_timeline_data)
  const animation_functions = generateScrollAnimationFunctionsByScrollTimeline(scroll_timeline_data)
  return animation_functions
}
