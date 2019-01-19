import React from 'react';
import PlayerList from 'components/PlayerList';
import TextContainer from 'components/TextContainer';
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
    this.props.getTeam(this.props.match.params.name);
    this.props.getStanding();
  }

  render() {
    console.log(this.props);
    const { players, team } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          <div className="row">
            <div className="col">
              <TextContainer title={team.name} text={team.teamInfo} />
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
  team: PropTypes.object.isRequired,
  getTeam: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getStanding: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getTeam: id => dispatch(getTeam(id)),
    getStanding: () => dispatch(getStanding()),
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
