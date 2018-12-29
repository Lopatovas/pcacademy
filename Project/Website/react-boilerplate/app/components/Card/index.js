import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import config from '../../utils/config';

export default function Card(props) {
  return (
    <div className="padding-bottom">
      <div className="card text-white bg-secondary text-center">
        <div className="card-header bg-dark">{props.teamName}</div>
        <div className="card-body">
          <p className="text-white card-text">{props.teamInfo}</p>
          <Link className="btn btn-dark" to={`teams/${props.teamName}`}>
            {config.TEAM_CARD_BUTTON}
          </Link>
        </div>
      </div>
    </div>
  );
}
