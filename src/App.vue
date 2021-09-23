<template>
	<Landing />
</template>

<script>
import { defineComponent } from "vue"
import Landing from "@/views/Landing/index"

export default defineComponent({
	components: { Landing: Landing },
})
</script>

<style lang="scss">
#app {
	background-color: var(--color-background);
}
</style>
