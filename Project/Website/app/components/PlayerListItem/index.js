import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from './style.css';

export default function PlayerListItem(props) {
  return (
    <div>
      <div className={`text-left ${Style.playerCard}`}>
        <Link className={Style.playerItem} to={`/players/${props.name}`}>
          <h5 className="text-white">{props.name}</h5>
          <p className="text-white">{props.position}</p>
        </Link>
      </div>
    </div>
  );
}

PlayerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
