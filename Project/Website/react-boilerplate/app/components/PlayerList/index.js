import React from 'react';
import PropTypes from 'prop-types';
import config from '../../utils/config';
import PlayerListItem from '../PlayerListItem';
import Style from './style.css';

export default function PlayerList(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box">
        <h2 className="text-white text-center">{config.PLAYERS}</h2>
        {props.data.map(player => (
          <PlayerListItem
            key={player.id}
            name={player.name}
            position={player.position}
          />
        ))}
      </div>
    </div>
  );
}

PlayerList.propTypes = {
  data: PropTypes.array,
};
