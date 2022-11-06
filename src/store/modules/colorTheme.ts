import { Module } from "vuex"
import { RootState } from "../index"

const DEFAULT_COLOR_THEME = "light-mode"
const LOCAL_STORAGE_KEY = "COLOR_THEME"

export type ColorThemeTypes = "light-mode" | "dark-mode" | "os-theme-mode"

export interface colorThemeState {
  colorTheme: ColorThemeTypes
}

export const colorThemeModule: Module<colorThemeState, RootState> = {
  namespaced: true,
  state: {
    colorTheme: (localStorage.getItem(LOCAL_STORAGE_KEY) as ColorThemeTypes) || DEFAULT_COLOR_THEME,
  },
  mutations: {
    SET_COLOR_THEME(state, payload: colorThemeState) {
      state.colorTheme = payload.colorTheme
    },
  },
  actions: {
    SET_COLOR_THEME_WITH_LOCALSTORAGE(state, payload: colorThemeState) {
      localStorage.setItem(LOCAL_STORAGE_KEY, payload.colorTheme)
      this.commit("colorThemeModule/SET_COLOR_THEME", {
        colorTheme: payload.colorTheme,
      })
    },
  },
}
