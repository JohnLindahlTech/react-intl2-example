import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import TranslatedComponent from './components/translated-component.jsx';
import { ensureIntl } from './ensureIntl';

class App extends Component {

  constructor(props){
    super(props);
    addLocaleData(props.initialState.localeData);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.state = {
      lang: props.initialState.lang,
      messages: props.initialState.messages,
    };
  }

  handleLangChange(event){
    const lang = event.target.value;

    ensureIntl(lang).then(({ messages, localeData }) => {
      addLocaleData(localeData);
      this.setState({ lang, messages });
    });
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

function init(){
  const lang = 'sv-SE';
  ensureIntl(lang).then(({ messages, localeData }) => {
    ReactDOM.render(<App initialState={ { messages, localeData, lang } }/>, document.getElementById('app'));
  });
}

init();
