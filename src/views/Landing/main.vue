<template>
	<section>
		<h1 id="headLine">
			안녕하세요,
			<br />
			<span id="name">문태경</span>입니다.
		</h1>
		<p id="keyword">Web Developer / Frontend</p>
		<p id="hashtags">#반응형 #포트폴리오</p>
		<br />
		<font-awesome-icon
			:icon="['fas', 'cog']"
			size="lg"
			@click="modalVisible = true"
		/>
		<Modal v-model="modalVisible">
			<h1>테마 설정</h1>
			<br />
			<div class="modal-grid">
				<ToggleRadio
					v-model="colorThemeRadio"
					value="light-mode"
					name="color-theme"
				>
					라이트 모드
				</ToggleRadio>
				<ToggleRadio
					v-model="colorThemeRadio"
					value="dark-mode"
					name="color-theme"
				>
					다크 모드
				</ToggleRadio>
				<ToggleRadio
					v-model="colorThemeRadio"
					value="os-theme-mode"
					name="color-theme"
				>
					기기 테마
				</ToggleRadio>
			</div>
		</Modal>
		{{ scrollY }}
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

import { getFirestore, getDocs, collection } from "firebase/firestore"

import Modal from "@/components/Modal.vue"
import ToggleRadio from "@/components/RadioToggle.vue"

import useScrollY from "@/lib/scrollY"

export default defineComponent({
	components: {
		Modal,
		ToggleRadio,
	},
	setup() {
		const store = useStore()

		const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
		const setColorTheme = (payload: { colorTheme: string }) =>
			store.dispatch(
				"colorThemeModule/SET_COLOR_THEME_WITH_LOCALSTORAGE",
				payload,
			)
		const { scrollY } = useScrollY()

		return { colorTheme, setColorTheme, scrollY }
	},
	data() {
		return {
			modalVisible: false,
			colorThemeRadio: this.colorTheme,
		}
	},
	watch: {
		colorThemeRadio(nv) {
			this.setColorTheme({ colorTheme: nv })
		},
	},
	created() {
		this.test()
	},
	methods: {
		async test() {
			const db = getFirestore()
			const querySnapshot = await getDocs(collection(db, "Projects"))
			querySnapshot.forEach(doc => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data())
			})
		},
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
.modal-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
}
</style>
