<template>
  <main>
    <section id="projects">Projects</section>
    <Main />
    <!-- <Main /> -->
    <!-- <About /> -->
    <section id="projects">Projects</section>
    <section id="contacts">Contact</section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Main from "./main.vue"
import About from "./About.vue"

export default defineComponent({
  components: {
    Main,
    About,
  },
})
</script>

<style lang="scss" scoped>
main {
  section {
    /** Section Debug Code */
    height: 100vh;
    border-bottom: 1px solid #000;
  }
}
</style>
