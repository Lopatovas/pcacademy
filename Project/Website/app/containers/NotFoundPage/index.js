/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import TextContainer from 'components/TextContainer';
import config from '../../utils/config';
import Style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className={Style.bg}>
        <div className="container">
          <TextContainer
            title={config.NOT_FOUND_TITLE}
            text={config.NOT_FOUND_TEXT}
          />
        </div>
      </div>
    );
  }
}
