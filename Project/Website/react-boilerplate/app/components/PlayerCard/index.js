import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function PlayerCard(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="box bg-secondary text-white">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/50"
          alt="Player"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
};

PlayerCard.defaultProps = {
  name: 'No name provided',
  info: 'No info provided',
};
