<template>
	<transition name="modal">
		<div class="modal-backdrop" v-show="modelValue" @click="close">
			<div class="modal-contents">asdf</div>
		</div>
	</transition>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		modelValue(nv, ov) {
			document.body.style.overflow = nv ? "hidden" : "scroll"
		},
	},
	methods: {
		close() {
			this.$emit("update:modelValue", false)
		},
	},
})
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 300ms ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
	opacity: 0 !important;
}

.modal-backdrop {
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal-contents {
	width: 100px;
	height: auto;
	background-color: #fff;
}
</style>
