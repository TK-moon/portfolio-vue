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

export default defineComponent({
  components: { Header },
  setup() {
    const store = useStore()
    const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)

    return { colorTheme }
  },
  methods: {
    getColorThemeClass() {
      switch (this.colorTheme) {
        case "light-mode":
          return "light-mode"
        case "dark-mode":
          return "dark-mode"
        case "os-theme-mode":
          return "os-theme-mode"
      }
    },
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
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
