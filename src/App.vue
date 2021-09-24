<template>
	<main id="themeProvider" :class="this.colorTheme">
		<Landing />
	</main>
</template>

<script>
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import Landing from "@/views/Landing/index"

export default defineComponent({
	setup() {
		const store = useStore()
		const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
		return { colorTheme }
	},
	components: { Landing: Landing },
	methods: {
		getColorThemeClass() {
			switch (this.colorTheme) {
				case "light-mode":
					return "light-mode"
				case "dark-mode":
					return "dark-mode"
				case "os-theme-mode":
					return "os-theme-mode"
			}
		},
	},
})
</script>

<style lang="scss">
#app {
}
#themeProvider {
	background-color: var(--background-color);
}
</style>
