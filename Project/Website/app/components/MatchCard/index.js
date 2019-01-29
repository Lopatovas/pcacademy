import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

function MatchCard(props) {
  const { fixture } = props;
  return (
    <div className={Style.paddingTop}>
      <div className="bg-secondary box text-white">
        <div className={`row ${Style.title}`}>
          <div className="col text-center">
            <h3>{fixture.match.homeTeam.name}</h3>
          </div>
          <div className="col text-center">
            <h3>vs</h3>
          </div>
          <div className="col text-center">
            <h3>{fixture.match.awayTeam.name}</h3>
          </div>
        </div>
        <div />
        <div className={`text-center ${Style.text}`}>
          <p>{fixture.match.utcDate}</p>
          <p>{fixture.match.venue}</p>
          <p>{`Matchday: ${fixture.match.matchday}`}</p>
        </div>
        {fixture.match.status !== 'SCHEDULED' ? (
          <div className={`text-center ${Style.text}`}>
            <div className={`row ${Style.title}`}>
              <div className="col text-center">
                <h3>{fixture.match.score.fullTime.homeTeam}</h3>
              </div>
              <div className="col text-center">
                <h3>-</h3>
              </div>
              <div className="col text-center">
                <h3>{fixture.match.score.fullTime.awayTeam}</h3>
              </div>
            </div>
            <p>Referees:</p>
            {fixture.match.referees.map(referee => (
              <p key={referee.id}>{referee.name}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

MatchCard.propTypes = {
  fixture: PropTypes.object,
};
MatchCard.defaultProps = {
  fixture: {},
};

export default MatchCard;
