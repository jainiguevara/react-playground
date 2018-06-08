import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import enBundle from './locales/en/translations';

const supportedBundles = [
    enBundle
];
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    lng: supportedBundles[0].language,
    fallbackLng: supportedBundles[0].language,
    ns: supportedBundles[0].translations,
    defaultNS: supportedBundles[0].translations,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    // react i18next special options (optional)
    react: {
      wait: false,
    }
  });
supportedBundles.forEach(b => i18n.addResourceBundle(b.language,b.namespace, b.resources, true, true));
export default i18n;