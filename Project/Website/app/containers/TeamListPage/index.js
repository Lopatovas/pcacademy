import React from 'react';
import Card from 'components/Card';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './style.css';
import Teams from '../../../internals/mocks/TEAMS_DATA.json';
import makeSelect from './selectors';
import { setTeams } from './actions';
import reducer from './reducer';

class TeamPage extends React.Component {
  componentDidMount() {
    this.props.setTeams(Teams);
  }

  render() {
    const { teams } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          {teams.map(team => (
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

TeamPage.propTypes = {
  teams: PropTypes.array.isRequired,
  setTeams: PropTypes.func.isRequired,
};

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
  withReducer,
  withConnect,
)(TeamPage);
