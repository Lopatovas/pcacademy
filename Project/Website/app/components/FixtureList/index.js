import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function FixtureList(props) {
  return (
    <div>
      <table
        className={`${
          Style.border
        } table table-hover table-borderless bg-secondary text-center text-white`}
      >
        <thead>
          <tr className={Style.bottomLine}>
            <th colSpan="3">{props.tableName}</th>
          </tr>
        </thead>
        <tbody>
          {props.fixtures.map(match => (
            <tr key={match.id} className={Style.bottomLine}>
              <td>{match.homeTeam}</td>
              <td>{match.awayTeam}</td>
              <td>{match.utcDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

FixtureList.propTypes = {
  tableName: PropTypes.string,
  fixtures: PropTypes.array.isRequired,
};

FixtureList.defaultProps = {
  tableName: '',
};
