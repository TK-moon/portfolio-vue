import { Module } from "vuex"
import { RootState } from "../index"

export interface colorThemeState {
	colorTheme: string
}

const OSDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
	? "dark"
	: "light"

export const colorThemeModule: Module<colorThemeState, RootState> = {
	namespaced: true,
	state: {
		colorTheme: OSDarkMode,
	},
	mutations: {
		SET_COLOR_THEME(state, payload) {
			state.colorTheme = payload.colorTheme
		},
	},
}
