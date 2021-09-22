import { createStore } from "vuex"

import { darkModeModule, darkModeModuleState } from "./modules/darkMode"

export interface RootState {
	darkModeModule: darkModeModuleState
}

export default createStore<RootState>({
	modules: {
		darkModeModule,
	},
})
