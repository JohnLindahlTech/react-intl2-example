import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from './components/translated-component';
import en from './../node_modules/react-intl/locale-data/en';
import sv from './../node_modules/react-intl/locale-data/sv';

import svMessages from '../l10n/sv-SE.json';

addLocaleData(en);
addLocaleData(sv);

const App = (props) => {
  return (
      <IntlProvider locale={ `sv-SE` } messages={ svMessages }>
        <TranslatedComponent {...props} />
      </IntlProvider>
  );
};


ReactDOM.render(<App/>, document.getElementById('app'));


