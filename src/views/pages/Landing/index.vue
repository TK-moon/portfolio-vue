<template>
  <main>
    <Main id="main" />
    <About id="about" />
    <Career id="career" />
    <section id="projects">Projects</section>
    <section id="contacts">Contact</section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Main from "./Main.vue"
import About from "./About.vue"
import Career from "./Career.vue"

export default defineComponent({
  components: {
    Main,
    About,
    Career,
  },
})
</script>

<style lang="scss" scoped>
main {
  section {
    /** Section Debug Code */
    /* min-height: 100vh; */
    border-bottom: 1px solid #000;
  }
}
</style>
