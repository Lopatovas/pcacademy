import React from 'react';
import PlayerList from 'components/PlayerList';
import TextContainer from 'components/TextContainer';
import StatisticsTable from 'components/StatisticsTable';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Team from '../../../internals/mocks/TEAM_DATA.json';
import Style from './style.css';
import makeSelect from './selectors';
import { setPlayers, setTeam } from './actions';
import reducer from './reducer';

class TeamPage extends React.Component {
  componentDidMount() {
    this.props.setPlayers(Team.players);
    this.props.setTeam(Team);
  }

  render() {
    const { players, team } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          <div className="row">
            <div className="col">
              <TextContainer title={team.teamName} text={team.teamInfo} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PlayerList data={players} />
            </div>
            <div className="col">
              <TextContainer title={team.teamName} text={team.teamInfo} />
              <StatisticsTable data={team.statistics} />
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
  setPlayers: PropTypes.func.isRequired,
  team: PropTypes.object.isRequired,
  setTeam: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setPlayers: players => dispatch(setPlayers(players)),
    setTeam: team => dispatch(setTeam(team)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'teamPage',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(TeamPage);
