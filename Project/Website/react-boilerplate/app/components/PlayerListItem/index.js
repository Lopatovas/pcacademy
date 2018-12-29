import React from 'react';
import './playerListItem.css';
import { Link } from 'react-router-dom';

export default function PlayerListItem(props) {
  return (
    <div>
      <div className="text-left playerCard">
        <Link to={`/players/${props.name}`}>
          <h5 className="text-white">{props.name}</h5>
          <p className="text-white">{props.position}</p>
        </Link>
      </div>
    </div>
  );
}
