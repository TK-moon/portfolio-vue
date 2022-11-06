<template>
  <label class="toggle-container">
    <div class="toggle" :class="{ active: isChecked }"></div>
    <slot></slot>
    <input type="radio" :checked="isChecked" @change="onCheckboxChange" :value="value" />
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<unknown>,
      required: true,
    },
    value: String,
    name: String,
  },
  methods: {
    onCheckboxChange(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value)
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    },
  },
})
</script>

<style lang="scss" scoped>
input {
  display: none;
}
.toggle-container {
  display: flex;
  gap: 10px;
}
.toggle {
  cursor: pointer;
  position: relative;
  display: flex;
  height: 26px;
  width: 48px;
  height: 26px;
  background-color: #dadada;
  border-radius: 13px;
  transition: background-color 200ms ease-in-out 0s;
  &:after {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 13px;
    background-color: #fff;
    content: "";
    transform: translateX(0);
    transition: all 200ms ease-in-out 0s;
  }
  &.active {
    background-color: var(--color-primary);
    &:after {
      transform: translateX(100%);
      background-color: #fff;
    }
  }
}
</style>
