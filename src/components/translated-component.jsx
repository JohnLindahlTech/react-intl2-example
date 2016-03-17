import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
const TranslatedComponent = (props) => {

  const translations = defineMessages({
    predefinedTranslation: {
      id: 'PREDEFINED',
      defaultMessage: 'Hello I am predefined',
      description: 'This translation is defined in a defineMessage.',
    },
  });

  return (
      <div>
        <p>
          <FormattedMessage
            {...translations.predefinedTranslation}
            values={ { name: 'World' } }
          />
        </p>
        <p>
          <FormattedMessage
            id="INLINE"
            defaultMessage="Oh it's you again, I am defined inline of a Formatted message!"
            description="This translation is created inline of the code"
          />
        </p>
        <p>
          <FormattedMessage
            id="VARIABLE"
            defaultMessage="This guy has a variable embedded: {name}"
            description="A translation with a variable"
            values={{name:'Hello World'}}
            />
        </p>
        <p>
          <FormattedMessage
            id="NOT_EXISTING"
            defaultMessage="This is not yet translated"
            description="This is an example of some translation which is missed in the process"
            />
        </p>
      </div>
  );
};


export default TranslatedComponent;
