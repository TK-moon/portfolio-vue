<template>
  <h1 class="modal-title">테마 설정</h1>
  <br />
  <div class="modal-grid">
    <ToggleRadio v-model="colorThemeRadio" value="light-mode" name="color-theme"> 라이트 모드 </ToggleRadio>
    <ToggleRadio v-model="colorThemeRadio" value="dark-mode" name="color-theme"> 다크 모드 </ToggleRadio>
    <ToggleRadio v-if="os_theme_supported" v-model="colorThemeRadio" value="os-theme-mode" name="color-theme">
      기기 테마
    </ToggleRadio>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import { ColorThemeTypes } from "@/store/modules/colorTheme"
import ToggleRadio from "@/views/components/RadioToggle.vue"

const getColorThemeHandler = () => {
  const store = useStore()
  const colorTheme = computed<ColorThemeTypes>(() => store.state.colorThemeModule.colorTheme)
  const setColorTheme = (payload: { colorTheme: string }) =>
    store.dispatch("colorThemeModule/SET_COLOR_THEME_WITH_LOCALSTORAGE", payload)
  return { colorTheme, setColorTheme }
}

export default defineComponent({
  components: {
    ToggleRadio,
  },
  setup() {
    const { colorTheme, setColorTheme } = getColorThemeHandler()
    const os_theme_supported = window.matchMedia("(prefers-color-scheme: dark)").matches

    return {
      colorTheme,
      setColorTheme,
      os_theme_supported,
    }
  },
  data() {
    return {
      colorThemeRadio: this.colorTheme,
    }
  },
  watch: {
    colorThemeRadio(nv) {
      this.setColorTheme({ colorTheme: nv })
    },
  },
})
</script>

<style scoped>
.modal-title {
  font-size: 24px;
}
.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
</style>
