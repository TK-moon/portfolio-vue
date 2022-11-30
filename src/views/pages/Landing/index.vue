<template>
  <main>
    <Main id="main" />
    <About id="about" />
    <Career id="career" />
    <Projects id="projects" />
    <Contacts id="contacts" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Main from "./Main.vue"
import About from "./About.vue"
import Career from "./Career.vue"
import Projects from "./Projects.vue"
import Contacts from "./Contacts.vue"

export default defineComponent({
  components: {
    Main,
    About,
    Career,
    Projects,
    Contacts,
  },
})
</script>

<style lang="scss" scoped>
main {
  section {
    /** Section Debug Code */
    border-bottom: 1px solid #000;
  }
}
</style>
