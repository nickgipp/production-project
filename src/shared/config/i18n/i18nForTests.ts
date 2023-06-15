import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    returnNull: false,
    resources: { ru: { translationsNS: {} } },
});

export default i18n;
