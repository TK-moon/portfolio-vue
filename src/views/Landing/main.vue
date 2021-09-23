<template>
	<section>
		<h1 id="headLine">
			안녕하세요,
			<br />
			<span id="name" class="text-bolder">문태경</span>입니다.
		</h1>
		<p id="keyword">Web Developer / Frontend</p>
		<p id="hashtags">#반응형 #포트폴리오</p>
		{{ this.darkMode }}
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

		const darkMode = computed(() => store.state.darkModeModule.darkMode)
		const setDarkMode = (payload: { darkMode: boolean }) =>
			store.commit("darkModeModule/SET_DARKMODE", payload)

		return { darkMode, setDarkMode }
	},
	data() {
		return {
			darkModeToggle: this.darkMode,
		}
	},
	components: {
		Toggle: Toggle,
	},
	watch: {
		darkModeToggle: function (nv) {
			this.setDarkMode({ darkMode: nv })
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
			this.darkMode &&
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
