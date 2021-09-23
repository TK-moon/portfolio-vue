<template>
	<input type="checkbox" :checked="modelValue" @change="onCheckboxChange" />
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
	props: {
		modelValue: Boolean,
	},
	methods: {
		onCheckboxChange: function (event) {
			this.$emit("update:modelValue", event.target.checked)
		},
	},
})
</script>

<style lang="scss" scoped></style>
