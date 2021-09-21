<template>
	<Landing />
</template>

<script>
import { defineComponent } from "vue"
import Landing from "@/views/Landing/index"

export default defineComponent({
	components: { Landing: Landing },
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
