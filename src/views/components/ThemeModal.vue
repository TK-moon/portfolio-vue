<template>
  <h1>테마 설정</h1>
  <br />
  <div class="modal-grid">
    <ToggleRadio v-model="colorThemeRadio" value="light-mode" name="color-theme"> 라이트 모드 </ToggleRadio>
    <ToggleRadio v-model="colorThemeRadio" value="dark-mode" name="color-theme"> 다크 모드 </ToggleRadio>
    <ToggleRadio v-model="colorThemeRadio" value="os-theme-mode" name="color-theme"> 기기 테마 </ToggleRadio>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import ToggleRadio from "@/views/components/RadioToggle.vue"

const getColorThemeHandler = () => {
  const store = useStore()
  const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
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

    return {
      colorTheme,
      setColorTheme,
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
.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
</style>
