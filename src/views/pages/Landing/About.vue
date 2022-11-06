<template>
  <LandingSubPageLayout>
    <template #title>About</template>
    <template #contents> </template>
  </LandingSubPageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import LandingSubPageLayout from "@/layouts/LandingSubPageLayout.vue"

export default defineComponent({
  components: {
    LandingSubPageLayout,
  },
})
</script>

<style lang="scss" scoped></style>
