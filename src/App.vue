<template>
  <div id="themeProvider" :class="colorTheme">
    <div id="teleportRoot"></div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import Header from "@/views/components/Header.vue"

import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/pagination/pagination.scss"
import "swiper/modules/scrollbar/scrollbar.scss"

import { ColorThemeTypes } from "./store/modules/colorTheme"

export default defineComponent({
  components: { Header },
  setup() {
    const store = useStore()
    const colorTheme = computed<ColorThemeTypes>(() => store.state.colorThemeModule.colorTheme)

    return { colorTheme }
  },
  methods: {},
  mounted() {
    const RO = new ResizeObserver(() => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
    RO.observe(document.body)
  },
})
</script>

<style lang="scss">
#themeProvider {
  background-color: var(--background-color);
}
#teleportRoot {
  position: relative;
}
</style>
