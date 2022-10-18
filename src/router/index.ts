import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import Landing from "@/views/pages/Landing/index.vue"

const routes: Array<RouteRecordRaw> = [
	{ path: "/", name: "Landing", component: Landing },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from, savedPosition)
		if (to.hash) {
			return { el: to.hash }
		}
	},
})

export default router
