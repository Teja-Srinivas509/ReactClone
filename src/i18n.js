import i18n from 'i18next'; //The core i18n library that provides functionality for managing translations.
import Backend from 'i18next-http-backend';// is used to load translation files from a backend server. This allows you to store translations in separate files and fetch them as needed.
//public/locals/{lang}/translation.json
import LanguageDetector from 'i18next-browser-languagedetector';//is used to detect the user’s language from various sources such as cookies, local storage, or the browser’s language settings.
import {initReactI18next} from 'react-i18next';//allowing you to use React hooks and components for handling translations.
i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', //default language
    debug: true,   //debug logs
    ns: ['header', 'features', 'accordion', 'footer'],
    defaultNS: 'header',
    interpolation: { // placeholders in translation strings that get replaced with dynamic content when the translations are rendered.
        escapeValue: false,
        },
              
  });

  export default i18n