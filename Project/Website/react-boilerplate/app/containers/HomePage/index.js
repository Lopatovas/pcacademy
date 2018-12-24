import React from 'react';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import Footer from 'components/Footer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Footer author="Edgaras Lopatovas"/>
      </div>
    );
  }
}
