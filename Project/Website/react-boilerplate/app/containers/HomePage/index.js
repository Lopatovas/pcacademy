import React from 'react';
import TextContainer from 'components/TextContainer';
import Style from './style.css';
import HomePageData from '../../../internals/mocks/HOMEPAGE_DATA.json';

export default function HomePage() {
  return (
    <div>
      <div className={Style.bg}>
        <div className="container">
          {HomePageData.map(text => (
            <TextContainer key={text.id} title={text.title} text={text.text} />
          ))}
          <br />
        </div>
      </div>
    </div>
  );
}
