import React from 'react';
import PropTypes from 'prop-types';
import config from '../../utils/config';
import PlayerListItem from '../PlayerListItem';
import Style from './style.css';

export default function PlayerList(props) {
  if (props.data.length > 0) {
    return (
      <div className={Style.paddingTop}>
        <div className="bg-secondary box">
          <h2 className="text-white text-center">{config.PLAYERS}</h2>
          {props.data.map(
            player =>
              player.role === 'PLAYER' ? (
                <PlayerListItem
                  key={player.id}
                  name={player.name}
                  position={player.position}
                />
              ) : null,
          )}
        </div>
      </div>
    );
  }
  return <div />;
}

PlayerList.propTypes = {
  data: PropTypes.array.isRequired,
};
