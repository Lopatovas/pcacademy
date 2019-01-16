import React from 'react';
import PropTypes from 'prop-types';

export default function FixtureList(props) {
  return (
    <div>
      <table className="table table-hover table-sm bg-secondary text-center text-white">
        <thead>
          <tr>
            <th colSpan="3">{props.tableName}</th>
          </tr>
        </thead>
        <tbody>
          {props.fixtures.map(match => (
            <tr key={match.id}>
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
