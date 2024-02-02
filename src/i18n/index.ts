import { createI18n } from "vue-i18n"
import koKR from "./locales/koKR.json"
import enUS from "./locales/enUS.json"

type MessageSchema = typeof koKR

const messages = {
  "ko-KR": koKR,
  "en-US": enUS,
}

const i18n = createI18n<MessageSchema, keyof typeof messages>({
  locale: "ko-KR",
  fallbackLocale: "en-US",
  messages,
})

export { i18n }
