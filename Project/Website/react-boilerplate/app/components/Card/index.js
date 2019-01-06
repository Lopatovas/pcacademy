import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Style from './style.css';
import config from '../../utils/config';

export default function Card(props) {
  return (
    <div className={Style.paddingTop}>
      <div className={`${Style.card} card text-white bg-secondary text-center`}>
        <div className={`${Style.cardHeader} card-header bg-dark`}>
          {props.teamName}
        </div>
        <div className="card-body row">
          <div className="col">
            <img src="https://via.placeholder.com/250" alt="Team logo" />
          </div>
          <div className="col">
            <p className="text-white card-text">{props.teamInfo}</p>
          </div>
        </div>
        <Link
          className={`${Style.buttonCurve} btn btn-dark mb-2 mx-5`}
          to={`teams/${props.teamName}`}
        >
          {config.TEAM_CARD_BUTTON}
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  teamName: PropTypes.string,
  teamInfo: PropTypes.string,
};
