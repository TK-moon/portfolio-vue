import { Module } from "vuex"
import { RootState } from "../index"

export interface darkModeModuleState {
	darkMode: boolean
}

const OSDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
	? true
	: false

export const darkModeModule: Module<darkModeModuleState, RootState> = {
	namespaced: true,
	state: {
		darkMode: OSDarkMode,
	},
	mutations: {
		SET_DARKMODE(state, payload) {
			state.darkMode = payload.darkMode
		},
	},
}
