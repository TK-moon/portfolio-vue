<template>
  <ScrollSection :animation="[{}]">
    <h1 id="headLine">
      안녕하세요,
      <br />
      <span id="name">문태경</span>입니다.
    </h1>
    <p id="keyword">Web Developer / Frontend</p>
    <p id="hashtags">#반응형 #포트폴리오</p>
    <font-awesome-icon :icon="['fas', 'cog']" size="lg" @click="modalVisible = true" />
  </ScrollSection>
  <Modal v-model="modalVisible">
    <h1>테마 설정</h1>
    <br />
    <div class="modal-grid">
      <ToggleRadio v-model="colorThemeRadio" value="light-mode" name="color-theme"> 라이트 모드 </ToggleRadio>
      <ToggleRadio v-model="colorThemeRadio" value="dark-mode" name="color-theme"> 다크 모드 </ToggleRadio>
      <ToggleRadio v-model="colorThemeRadio" value="os-theme-mode" name="color-theme"> 기기 테마 </ToggleRadio>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "vuex"

import Modal from "@/views/components/Modal.vue"
import ToggleRadio from "@/views/components/RadioToggle.vue"
import ScrollSection from "@/views/components/ScrollAnimation/ScrollSection.vue"

const getColorThemeHandler = () => {
  const store = useStore()
  const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
  const setColorTheme = (payload: { colorTheme: string }) => store.dispatch("colorThemeModule/SET_COLOR_THEME_WITH_LOCALSTORAGE", payload)
  return { colorTheme, setColorTheme }
}

export default defineComponent({
  components: {
    Modal,
    ToggleRadio,
    ScrollSection,
  },
  setup() {
    const { colorTheme, setColorTheme } = getColorThemeHandler()
    const sectionRef = ref<HTMLElement>()

    return {
      colorTheme,
      setColorTheme,
      scrollY,
      sectionRef,
    }
  },
  data() {
    return {
      modalVisible: false,
      colorThemeRadio: this.colorTheme,
    }
  },
  methods: {
    fadeOut: function () {
      return [
        { opacity: 1, translateY: 0 },
        { opacity: 0, translateY: -100 },
      ]
    },
    fadeInOut: function () {
      return [
        { opacity: 0, translateY: 0 },
        { opacity: 1, translateY: -50 },
        { opacity: 0, translateY: -100 },
      ]
    },
  },
  computed: {},
  watch: {
    colorThemeRadio(nv) {
      this.setColorTheme({ colorTheme: nv })
    },
  },
})
</script>

<style lang="scss" scoped>
#headLine {
  font-size: 4vw;
  letter-spacing: 2px;
  transition: opacity 100ms linear;
  transition: opacity 100ms linear, transform 100ms linear;
  will-change: opacity, transform;
  color: var(--color-primary-text);
}
#name {
  font-size: 5vw;
  font-weight: 800;
}
#keyword {
  color: var(--color-primary-text);
}
#hashtags {
  color: var(--color-primary-text);
}
@include tablet {
  #headLine {
    font-size: 8vw;
  }
  #name {
    font-size: 9vw;
  }
}
@include mobile {
  #headLine {
    font-size: 12vw;
  }
  #name {
    font-size: 13vw;
  }
}
.modal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
</style>
