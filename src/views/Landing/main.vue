<template>
	<section ref="sectionRef">
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
		<p id="trigger" :style="centerStyle">TRIGGER</p>
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
		<p>{{ scrollY }}</p>
		<p>{{ centerScrollY }}</p>
	</section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "vuex"

import { getFirestore, getDocs, collection } from "firebase/firestore"

import Modal from "@/components/Modal.vue"
import ToggleRadio from "@/components/RadioToggle.vue"

import useScrollY from "@/lib/useScrollY"

const getColorThemeHandler = () => {
	const store = useStore()
	const colorTheme = computed(() => store.state.colorThemeModule.colorTheme)
	const setColorTheme = (payload: { colorTheme: string }) =>
		store.dispatch(
			"colorThemeModule/SET_COLOR_THEME_WITH_LOCALSTORAGE",
			payload,
		)
	return { colorTheme, setColorTheme }
}

export default defineComponent({
	components: {
		Modal,
		ToggleRadio,
	},
	setup() {
		const { colorTheme, setColorTheme } = getColorThemeHandler()
		const { scrollY, centerScrollY } = useScrollY(10)
		const sectionRef = ref<HTMLElement>()

		const centerStyle = computed(
			() => `position: absolute; top: ${centerScrollY.value}px`,
		)

		return {
			colorTheme,
			setColorTheme,
			scrollY,
			sectionRef,
			centerScrollY,
			centerStyle,
		}
	},
	data() {
		return {
			modalVisible: false,
			colorThemeRadio: this.colorTheme,
		}
	},
	computed: {},
	watch: {
		colorThemeRadio(nv) {
			this.setColorTheme({ colorTheme: nv })
		},
		scrollY(nv) {
			if (!this.sectionRef) return
			let RAFTimeout = null
			if (RAFTimeout) {
				cancelAnimationFrame(RAFTimeout)
			} else {
				const sectionRef = this.sectionRef
				requestAnimationFrame(() => {
					const scrollHeight = sectionRef.offsetHeight / 4
					const section = sectionRef.children[0] as HTMLLIElement
					const percentage = (nv / scrollHeight) * 100
					if (nv > scrollHeight) {
						section.style.opacity = "0"
						return
					}
					section.style.opacity = (1 - percentage / 100).toString()
					// section.style.transform = `translateY(${percentage}%)`
					section.style.transform = `matrix(1, 0, 0, 1, 0, ${percentage * -1})`
				})
			}
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
	},
})
</script>

<style lang="scss" scoped>
#main {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	color: var(--color-primary-text);
	height: 200vh;

	animation-name: fadeIn, slideUp;
	animation-duration: 500ms;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
}
#headLine {
	font-size: 4vw;
	letter-spacing: 2px;
	transition: opacity 100ms linear;
	transition: opacity 100ms linear, transform 100ms linear;
	will-change: opacity, transform;
	position: sticky;
	top: 40vh;
}
#name {
	font-size: 5vw;
	font-weight: 800;
}
#keyword {
	/* position: sticky;
	top: 80vh; */
}
#hashtags {
	/* margin-top: 1em; */
	/* font-weight: 300;
	position: sticky;
	top: 85vh; */
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
