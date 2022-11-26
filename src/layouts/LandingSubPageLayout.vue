<template>
  <section class="landing-sub-page-layout" ref="page">
    <h2 class="landing-sub-page-title">
      <slot name="title"></slot>
    </h2>
    <div class="landing-sub-page-contents">
      <slot name="contents"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({})
</script>

<style lang="scss" scoped>
.landing-sub-page-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  @include tablet {
    padding: 50px 20px;
  }
  @include mobile {
    padding: 50px 20px;
  }
}
.landing-sub-page-title {
  color: var(--color-primary-text);
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  /* position: sticky;
  top: 80px; */
  @include tablet {
    font-size: 24px;
    /* top: 80px; */
  }
  @include mobile {
    font-size: 20px;
    /* top: 60px; */
  }
}
</style>
