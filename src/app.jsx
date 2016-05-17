import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from './components/translated-component.jsx';
// I have not yet found a way to fetch the locale settings dynamically.
// This is not pure data, but rather scripts. It is rules for stuff like
// how to format numbers and present date/time.
import sv from 'react-intl/locale-data/sv';
import en from 'react-intl/locale-data/en';
// Default language, only include this at inital load.
import svMessages from '../l10n/sv-SE.json';

addLocaleData(sv);
addLocaleData(en);

class App extends Component {

  constructor(props){
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.state = {
      lang: 'sv-SE',
      messages: svMessages,
    };
  }

  handleLangChange(event){
    const lang = event.target.value;
    switch(lang){
      case 'sv-SE':
        // We need some kind of default language.
        return this.setState({ lang, messages: svMessages});
      default:
        // Download the language we want dynamically, at runtime.
        return fetch(`l10n/${lang}.json`)
          .then(response => response.json())
          .then(messages => this.setState({lang, messages}));
    }

  }

  render() {
    const { lang, messages } = this.state;
    return (
      <div>
        <select value={lang} onChange={this.handleLangChange}>
          <option value="sv-SE">Swedish</option>
          <option value="en">English</option>
        </select>
        <IntlProvider locale={ lang } messages={ messages }>
          <TranslatedComponent {...this.props} />
        </IntlProvider>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
