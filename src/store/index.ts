import { createStore } from "vuex"

import { colorThemeModule, colorThemeState } from "./modules/colorTheme"

export interface RootState {
	colorThemeState: colorThemeState
}

export default createStore<RootState>({
	modules: {
		colorThemeModule,
	},
})
