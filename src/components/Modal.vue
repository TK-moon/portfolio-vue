<template>
	<transition name="modal">
		<div class="modal-backdrop" v-if="modelValue" @click.self="close">
			<div class="modal-contents">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		modelValue(nv: boolean) {
			document.body.style.overflow = nv ? "hidden" : "unset"
		},
	},
	methods: {
		close(): void {
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
	background-color: var(--modal-backdrop-color);
	backdrop-filter: blur(3px);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 900;
}

.modal-contents {
	width: 100px;
	height: auto;
	min-width: 320px;
	max-height: 90vh;
	padding: 20px;
	background-color: var(--modal-background-color);
	border-radius: 10px;
}
</style>
