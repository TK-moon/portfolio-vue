import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import Index from "@/views/Landing/index.vue"

const routes: Array<RouteRecordRaw> = [
	{ path: "/", name: "Index", component: Index },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { el: to.hash }
		}
	},
})

export default router
