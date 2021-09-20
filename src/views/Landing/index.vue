<template>
	<Header />
	<main>
		<Main id="main" />
		<section id="about">About</section>
		<section id="projects">Projects</section>
		<section id="contacts">Contact</section>
	</main>
</template>

<script>
import Header from "@/components/Header.vue"
import Main from "./main.vue"

export default {
	components: {
		Header,
		Main,
	},
}
</script>

<style lang="scss" scoped>
main {
	section {
		height: 100vh;
		border-bottom: 1px solid #000;
	}
}
</style>
