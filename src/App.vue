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
