<template>
  <span class="project-tag" :class="`tag-type-${type}`">
    {{ text_map.get(type) }}
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

type TagType = "business" | "individual"

export default defineComponent({
  props: {
    disable_multiple_animation: { type: Boolean },
    type: {
      type: String as PropType<TagType>,
      required: true,
    },
  },
  setup: function () {
    const text_map = new Map<TagType, string>([
      ["business", "회사 프로젝트"],
      ["individual", "개인 프로젝트"],
    ])
    return { text_map }
  },
})
</script>

<style lang="scss" scoped>
.project-tag {
  font-size: 12px;
  background-color: var(--color-grey);
  padding: 1px 5px;
  border-radius: 3px;
  color: #fff;
  white-space: nowrap;
}

.tag-type-business {
  background-color: var(--color-primary);
}

.tag-type-individual {
  background-color: var(--color-success);
}
</style>
