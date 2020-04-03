import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../config/en/en.json'
import translationFR from '../config/fr/fr.json'

// the translations
const resources = {
    en: {translation: translationEN},
    fr: {translation: translationFR}
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: `${localStorage.getItem('language') ? localStorage.getItem('language') : 'fr' }`,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n
