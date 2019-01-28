import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

function MatchCard(props) {
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box text-white">
        <div className={`row ${Style.title}`}>
          <div className="col text-center">
            <h3>{props.homeTeam}</h3>
          </div>
          <div className="col text-center">
            <h3>{props.awayTeam}</h3>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

MatchCard.propTypes = {
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
};

export default MatchCard;
