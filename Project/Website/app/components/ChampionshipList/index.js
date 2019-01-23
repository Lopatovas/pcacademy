import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function ChampionshipList(props) {
  return (
    <div>
      <table
        className={`${
          Style.border
        } table table-hover table-borderless bg-secondary text-center text-white`}
      >
        <thead>
          <tr className={Style.bottomLine}>
            <th colSpan="8">{props.tableName}</th>
          </tr>
          <tr className={Style.bottomLine}>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Draw</th>
            <th>Goal diff.</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(team => (
            <tr key={team.position} className={Style.bottomLine}>
              <td>{team.position}</td>
              <td>{team.team.name}</td>
              <td>{team.playedGames}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.draw}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ChampionshipList.propTypes = {
  tableName: PropTypes.string,
  teams: PropTypes.array.isRequired,
};

ChampionshipList.defaultProps = {
  tableName: '',
};
