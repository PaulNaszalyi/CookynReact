import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../config/en/en.json'
import translationFR from '../config/fr/fr.json'

// the translations
const resources = {
    en: {translation: translationEN},
    fr: {translation: translationFR}
}

const localStore = JSON.parse(localStorage.getItem('persist:cookyn'))
const localLanguage = JSON.parse(localStore.language)

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: `${localLanguage.language ? localLanguage.language : 'fr' }`,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n
