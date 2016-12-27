const LOCALE_INITIALIZERS = {
  'sv-SE': ensureSvSE,
  'en': ensureEn,
}

export function ensureIntl(locale){
  const initializer = LOCALE_INITIALIZERS[locale] || ensureEn;
  return new Promise((resolve) => initializer(resolve));
}

function ensureSvSE(cb){
  require.ensure([
    'react-intl/locale-data/sv',
    '../l10n/sv-SE.json'
  ], require => {
    const messages = require('../l10n/sv-SE.json');
    const localeData = require('react-intl/locale-data/sv');
    cb({messages, localeData});
  })
}

function ensureEn(cb){
  require.ensure([
    'react-intl/locale-data/en',
    '../l10n/en.json'
  ], require => {
    const messages = require('../l10n/en.json');
    const localeData = require('react-intl/locale-data/en');
    cb({messages, localeData});
  })
}
