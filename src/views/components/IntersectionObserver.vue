<template>
	<div :ref="sentinalName" />
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
	name: "IntersectionObserver",
	props: {
		sentinalName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isIntersectingElement: false,
			ratio: null,
		}
	},
	watch: {
		isIntersectingElement: function (value) {
			this.$emit("on-intersection-element", value)
		},
		ratio(nv) {
			this.$emit("ratio", nv)
		},
	},
	mounted() {
		const sentinal = this.$refs[this.sentinalName]
		const handler = entries => {
			console.log(entries[0].intersectionRatio)
			this.ratio = entries[0].intersectionRatio
			if (entries[0].isIntersecting) {
				this.isIntersectingElement = true
			} else {
				this.isIntersectingElement = false
			}
		}
		const observer = new window.IntersectionObserver(handler)
		observer.observe(sentinal)
	},
})
</script>

<script></script>
