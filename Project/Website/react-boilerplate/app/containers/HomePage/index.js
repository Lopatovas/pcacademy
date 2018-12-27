import React from 'react';
import TextContainer from 'components/TextContainer';
import './homePage.css';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container">
            <TextContainer />
          </div>
        </div>
      </div>
    );
  }
}
