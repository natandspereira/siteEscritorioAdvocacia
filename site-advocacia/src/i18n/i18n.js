import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import TranslationPt from '../i18n/i18n_json/pt.json';
import TranslationEn from '../i18n/i18n_json/en.json';
import TranslationEs from '../i18n/i18n_json/es.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: TranslationPt,
            },
            en: {
                translation: TranslationEn,
            },
            es: {
                translation: TranslationEs,
            },
        },
        lng: "pt",
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;