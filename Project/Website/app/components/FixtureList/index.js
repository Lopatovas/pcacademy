import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function FixtureList(props) {
  return (
    <div>
      <table
        className={`${
          Style.border
        } table table-hover table-borderless bg-secondary text-center text-white mx-auto`}
      >
        {props.fixtures.length > 0 ? (
          <React.Fragment>
            <thead>
              <tr className={Style.bottomLine}>
                <th colSpan="8">{props.tableName}</th>
              </tr>
              <tr className={Style.bottomLine}>
                <th colSpan="8">
                  <label htmlFor="matchSlider">
                    Matchday: {props.matchday}
                  </label>
                  <input
                    type="range"
                    className="form-control-range"
                    value={props.matchday}
                    min={props.fixtures[0].matchday}
                    max={props.fixtures[props.fixtures.length - 1].matchday}
                    onChange={props.handleSlider}
                  />
                </th>
              </tr>
            </thead>
            <tbody className={Style.hover}>
              {props.fixtures.map(
                fixture =>
                  fixture.matchday === parseInt(props.matchday, 0) ? (
                    <tr
                      key={fixture.id}
                      className={`${Style.bottomLine} ${Style.maxHeight}`}
                      onClick={() => props.handleMatchClick(fixture.id)}
                    >
                      <td>{fixture.homeTeam.name}</td>
                      {fixture.score.fullTime.homeTeam === null ? (
                        <td colSpan="2" className="text-center">
                          {fixture.utcDate}
                        </td>
                      ) : (
                        <React.Fragment>
                          <td>{fixture.score.fullTime.homeTeam}</td>
                          <td>{fixture.score.fullTime.awayTeam}</td>
                        </React.Fragment>
                      )}
                      <td>{fixture.awayTeam.name}</td>
                    </tr>
                  ) : null,
              )}
            </tbody>
          </React.Fragment>
        ) : null}
      </table>
    </div>
  );
}

FixtureList.propTypes = {
  tableName: PropTypes.string,
  fixtures: PropTypes.array,
  matchday: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleSlider: PropTypes.func.isRequired,
  handleMatchClick: PropTypes.func.isRequired,
};

FixtureList.defaultProps = {
  tableName: '',
  fixtures: [],
  matchday: 1,
};
