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
import { setPlayers } from './actions';
import reducer from './reducer';

class TeamPage extends React.Component {
  componentDidMount() {
    this.props.setPlayers(Team.players);
  }

  render() {
    const { players } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          <div className="row">
            <div className="col">
              <TextContainer title={Team.teamName} text={Team.teamInfo} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PlayerList data={players} />
            </div>
            <div className="col">
              <TextContainer title={Team.teamName} text={Team.teamInfo} />
              <StatisticsTable data={Team.statistics} />
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
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setPlayers: players => dispatch(setPlayers(players)),
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
