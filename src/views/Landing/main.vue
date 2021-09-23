<template>
	<section>
		<h1 id="headLine">
			안녕하세요,
			<br />
			<span id="name" class="text-bolder">문태경</span>입니다.
		</h1>
		<p id="keyword">Web Developer / Frontend</p>
		<p id="hashtags">#반응형 #포트폴리오</p>
		{{ this.colorTheme }}
		<Toggle v-model="darkModeToggle" />
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import Toggle from "@/components/Toggle.vue"

export default defineComponent({
	setup() {
		const store = useStore()

		const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
		const setColorTheme = (payload: { colorTheme: string }) =>
			store.commit("colorThemeModule/SET_COLOR_THEME", payload)

		const darkModeToggleInit = colorTheme.value === "dark"

		return { colorTheme, setColorTheme, darkModeToggleInit }
	},
	data() {
		return {
			darkModeToggle: this.darkModeToggleInit,
		}
	},
	components: {
		Toggle: Toggle,
	},
	watch: {
		darkModeToggle: function (nv) {
			this.setColorTheme({ colorTheme: nv ? "dark" : "light" })
			nv
				? document.getElementById("app")?.classList.add("dark-mode")
				: document.getElementById("app")?.classList.remove("dark-mode")
		},
	},
	created() {
		this.initDarkMode()
	},
	methods: {
		initDarkMode: function () {
			this.colorTheme === "dark" &&
				document.getElementById("app")?.classList.add("dark-mode")
		},
	},
})
</script>

<style lang="scss" scoped>
#main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--color-primary-text);
}
#headLine {
	font-size: 4vw;
	letter-spacing: 2px;
}
#name {
	font-size: 5vw;
	font-weight: 800;
}
#keyword {
	margin-top: 3em;
}
#hashtags {
	margin-top: 1em;
	font-weight: 300;
}
@include tablet {
	#headLine {
		font-size: 8vw;
	}
	#name {
		font-size: 9vw;
	}
}
@include mobile {
	#headLine {
		font-size: 12vw;
	}
	#name {
		font-size: 13vw;
	}
}
</style>
