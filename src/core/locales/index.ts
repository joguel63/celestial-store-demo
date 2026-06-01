import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { landing as landingEn } from './en/landing.locale'
import { landing as landingEs } from './es/landing.locale'

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { landing: landingEn },
    es: { landing: landingEs },
  },
  supportedLngs: ['es', 'en'],
  fallbackLng: 'en',
  load: 'languageOnly',
  defaultNS: 'landing',
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
