import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';
import config from '../../utils/config';

export default function Card(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="box bg-secondary text-white">
        <img
          className={`${Style.imgScaling} card-img-top`}
          src={props.pictureUrl}
          alt="Logo"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  pictureUrl: PropTypes.string,
};

Card.defaultProps = {
  title: 'No title provided',
  info: 'No info provided',
  pictureUrl: config.DEFAULT_PICTURE,
};
