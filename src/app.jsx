import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from './components/translated-component.jsx';
import sv from 'react-intl/locale-data/sv';
import en from 'react-intl/locale-data/en';
import svMessages from '../l10n/sv-SE.json';
import enMessages from '../l10n/en.json';

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
        return this.setState({ lang, messages: svMessages});
      case 'en':
        return fetch('l10n/en.json')
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
