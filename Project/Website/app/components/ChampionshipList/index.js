import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';
import ChampionshipTableCell from '../championshipTableCell';

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
            <tr
              key={team.position}
              className={`${Style.bottomLine} ${Style.maxHeight}`}
            >
              <ChampionshipTableCell text={team.position} />
              <td>
                <img
                  className={Style.imgScaling}
                  src={team.team.crestUrl}
                  alt="Logo"
                />
                {team.team.name}
              </td>
              <ChampionshipTableCell text={team.playedGames} />
              <ChampionshipTableCell text={team.won} />
              <ChampionshipTableCell text={team.lost} />
              <ChampionshipTableCell text={team.draw} />
              <ChampionshipTableCell text={team.goalDifference} />
              <ChampionshipTableCell text={team.points} />
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
