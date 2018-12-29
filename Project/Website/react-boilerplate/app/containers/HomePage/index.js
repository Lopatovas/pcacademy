import React from 'react';
import TextContainer from 'components/TextContainer';
import './homePage.css';
import HomePageData from '../../../internals/mocks/HOMEPAGE_DATA.json';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container">
            {HomePageData.map(text => (
              <TextContainer
                key={text.id}
                title={text.title}
                text={text.text}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
