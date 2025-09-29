import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTransLations from '../locale/pt.json';
import enTransLations from '../locale/en.json';
import esTransLations from '../locale/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTransLations },
      pt: { translation: ptTransLations },
      es: { translation: esTransLations }
    },
    lng: 'pt', // idioma inicial
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
