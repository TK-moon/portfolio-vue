<template>
	<Landing />
</template>

<script>
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import Landing from "@/views/Landing/index"

export default defineComponent({
	setup() {
		const store = useStore()
		const darkMode = computed(() => store.state.darkModeModule.darkMode)
		return { darkMode }
	},
	components: { Landing: Landing },
})
</script>

<style lang="scss">
#app {
	background-color: var(--color-background);
}
</style>
