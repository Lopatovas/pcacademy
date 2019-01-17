import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function TextCard(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box">
        <h4 className={`${Style.title} text-white text-center`}>
          {props.title}
        </h4>
        <p className={`text-white text-left ${Style.text}`}>{props.text}</p>
      </div>
    </div>
  );
}

TextCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

TextCard.defaultProps = {
  title: 'No data provided',
  text: 'No text provided',
};
