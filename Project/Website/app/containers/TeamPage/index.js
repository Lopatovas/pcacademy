import React from 'react';
import PlayerList from 'components/PlayerList';
import Card from 'components/Card';
import StatisticsField from 'components/StatisticsField';
import StatisticsTable from 'components/StatisticsTable';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './style.css';
import makeSelect from './selectors';
import { getTeam, getStanding } from './actions';
import reducer from './reducer';
import saga from './saga';

class TeamPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTeam(this.props.match.params.name);
    this.props.getStanding(this.props.match.params.name);
  }

  render() {
    const { players, team, standing } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card
                pictureUrl={team.crestUrl}
                title={team.name}
                info={`${team.name} was found in ${
                  team.founded
                }. The clubs colors are ${team.clubColors}`}
              />
              <StatisticsTable>
                <StatisticsField name="Position" value={standing.position} />
                <StatisticsField name="Points" value={standing.points} />
                <StatisticsField
                  name="Games played"
                  value={standing.playedGames}
                />
                <StatisticsField name="Won" value={standing.won} />
                <StatisticsField name="Lost" value={standing.lost} />
                <StatisticsField name="Draw" value={standing.draw} />
                <StatisticsField name="Goals for" value={standing.goalsFor} />
                <StatisticsField
                  name="Goals against"
                  value={standing.goalsAgainst}
                />
                <StatisticsField
                  name="Goal difference"
                  value={standing.goalDifference}
                />
              </StatisticsTable>
            </div>
            <div className="col">
              <PlayerList data={players} />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

TeamPage.propTypes = {
  players: PropTypes.array.isRequired,
  team: PropTypes.object.isRequired,
  standing: PropTypes.object.isRequired,
  getTeam: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getStanding: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getTeam: id => dispatch(getTeam(id)),
    getStanding: teamId => dispatch(getStanding(teamId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'teamPage', reducer });
const withSaga = injectSaga({ key: 'teamPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TeamPage);
