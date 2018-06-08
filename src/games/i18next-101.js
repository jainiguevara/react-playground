const i18next = require('i18next');
const XHR = require('i18next-xhr-backend');

const loadPath = {
    lng: 'en',
    ns: 'common'
}
const ns = ['special', 'common'];
const getLoadPath = (lng = 'en', ns = 'common') => `${lng}/${ns}.json`;

i18next
    .use(XHR)
    .init({
    fallbackLng: 'en',
    debug: true,
    ns: ns,
    defaultNS: 'common',
    backend: {
        loadPath: getLoadPath(loadPath.lng, loadPath.ns),
        crossDomain: true
    }
}, (err, t) => {
    i18next.changeLanguage('en');
    console.log(i18next.t('button'));
})