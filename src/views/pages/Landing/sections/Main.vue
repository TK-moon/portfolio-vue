<template>
  <VueScrollMotion
    disable_multiple_animation
    :animation="[
      { opacity: 1, translate: '0 0' },
      { opacity: 1, translate: '0 0' },
      { opacity: 0, translate: '0 -100' },
    ]"
  >
    <h1 id="headLine">
      안녕하세요,
      <br />
      <span id="name">문태경</span>입니다.
    </h1>
    <p id="keyword">Web Developer / Frontend</p>
    <p id="hashtags">#반응형 #포트폴리오</p>
  </VueScrollMotion>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import ToggleRadio from "@/views/components/RadioToggle.vue"
import VueScrollMotion from "vue-scroll-motion"

export default defineComponent({
  components: {
    ToggleRadio,
    VueScrollMotion,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
#headLine {
  font-size: 4vw;
  letter-spacing: 2px;
  transition: opacity 100ms linear;
  transition: opacity 100ms linear, transform 100ms linear;
  color: var(--color-primary-text);
  margin-bottom: 20px;
}
#name {
  font-size: 5vw;
  font-weight: 800;
}
#keyword {
  color: var(--color-primary-text);
  margin-bottom: 10px;
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
</style>
