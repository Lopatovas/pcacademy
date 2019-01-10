import React from 'react';
import Card from 'components/Card';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Style from './style.css';
import Teams from '../../../internals/mocks/TEAMS_DATA.json';
import makeSelect from './selectors';
import { setTeams } from './actions';
import reducer from './reducer';

class TeamPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          {Teams.map(team => (
            <Card
              key={team.id}
              teamName={team.teamName}
              teamInfo={team.teamInfo}
            />
          ))}
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setTeams: teams => dispatch(setTeams(teams)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'teamListPage',
  reducer,
});

export default compose(
  withConnect,
  withReducer,
)(TeamPage);
