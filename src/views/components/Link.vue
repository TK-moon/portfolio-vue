<template>
  <a :href="href" target="_blank">
    <slot>{{ href }}</slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
a {
  position: relative;
  text-decoration: none;
  color: inherit;
  font-style: normal;
  &:after {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background-color: var(--color-primary-text);
    content: "";
    transition: transform 200ms ease-in-out;
    transform: scale(0);
    transform-origin: left;
  }
  &:hover:after {
    transform: scale(1);
  }
}
</style>
