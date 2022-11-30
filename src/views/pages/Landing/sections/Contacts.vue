<template>
  <LandingSubPageLayout>
    <template #title>Contacts</template>
    <template #contents>
      <div class="contacts-container">
        <Link href="mailto:tkmoon.dev@gmail.com" aria-label="메일 보내기">
          <font-awesome-icon :icon="['fas', 'paper-plane']" size="lg" />
        </Link>
        <Link href="https://www.linkedin.com/in/taekyoung-moon-176298229/" aria-label="링크드인">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
        </Link>
        <Link href="https://github.com/TK-moon" aria-label="깃허브">
          <font-awesome-icon :icon="['fab', 'github-square']" size="lg" />
        </Link>
      </div>
    </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"
import Link from "@/views/components/Link.vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
    Link,
  },
  data: function () {
    return {}
  },
})
</script>

<style scoped lang="scss">
.contacts-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 30px;
  font-size: 24px;
  place-content: center;
  color: var(--color-primary-text);
}
</style>
