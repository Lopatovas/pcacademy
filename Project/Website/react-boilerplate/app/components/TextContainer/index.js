import React from 'react';
import Style from './textContainer.css';

export default function TextCard(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box">
        <h4 className={`${Style.title} text-white text-center`}>{props.title}</h4>
        <p className="text-white text-left text">{props.text}</p>
      </div>
    </div>
  );
}
