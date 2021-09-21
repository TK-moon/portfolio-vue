<template>
	<Index />
</template>

<script>
import { defineComponent } from "vue"
import index from "@/views/Landing/index"

export default defineComponent({
	components: { Index: index },
	created() {
		const theme = this.getOSColorTheme()
		console.log(theme)
	},
	methods: {
		getOSColorTheme: () => {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
		},
	},
})
</script>

<style lang="scss">
#app {
	background-color: var(--color-background);
}
</style>
