import React from 'react';
import { Link } from 'react-router-dom';
import Style from './card.css';
import config from '../../utils/config';

export default function Card(props) {
  return (
    <div className={Style.paddingTop}>
      <div className={`${Style.card} card text-white bg-secondary text-center`}>
        <div className={`${Style.cardHeader} card-header bg-dark`}>{props.teamName}</div>
        <div className="card-body">
          <p className="text-white card-text">{props.teamInfo}</p>
          <Link
            className={`${Style.buttonCurve} btn btn-dark`}
            to={`teams/${props.teamName}`}
          >
            {config.TEAM_CARD_BUTTON}
          </Link>
        </div>
      </div>
    </div>
  );
}
