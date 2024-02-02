<template>
  <main>
    <Main id="main" />
    <About id="about" />
    <Career id="career" />
    <Projects id="projects" />
    <Contacts id="contacts" />
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Main from "./sections/Main.vue"
import About from "./sections/About.vue"
import Career from "./sections/Career.vue"
import Projects from "./sections/Projects.vue"
import Contacts from "./sections/Contacts.vue"

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

<style lang="scss" scoped></style>
