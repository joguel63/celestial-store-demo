import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { landing as landingEn } from './en/landing.locale'
import { landing as landingEs } from './es/landing.locale'

i18n.use(initReactI18next).init({
  resources: {
    en: { landing: landingEn },
    es: { landing: landingEs },
  },
  lng: 'es',
  fallbackLng: 'en',
  defaultNS: 'landing',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
