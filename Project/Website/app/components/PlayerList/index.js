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
          <div className={Style.scrollable}>
            {props.data.map(
              player =>
                player.role === 'PLAYER' ? (
                  <PlayerListItem
                    key={player.id}
                    playerId={player.id}
                    name={player.name}
                    position={player.position}
                  />
                ) : null,
            )}
          </div>
        </div>
      </div>
    );
  }
  return <div />;
}

PlayerList.propTypes = {
  data: PropTypes.array.isRequired,
};
