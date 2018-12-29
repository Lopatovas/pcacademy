import React from 'react';
import config from '../../utils/config';
import PlayerListItem from '../PlayerListItem';

export default function PlayerList(props) {
  return (
    <div>
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
