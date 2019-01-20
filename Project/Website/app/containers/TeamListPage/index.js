import React from 'react';
import TeamListItem from 'components/TeamListItem';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './style.css';
import makeSelect from './selectors';
import { getTeams } from './actions';
import reducer from './reducer';
import saga from './saga';

class TeamListPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTeams();
  }

  render() {
    const { teams } = this.props;
    return (
      <div className={Style.bgTeam}>
        <div className="container">
          {teams.map(
            team =>
              team.name === 'England' ? null : (
                <TeamListItem
                  key={team.id}
                  id={team.id}
                  teamName={team.name}
                  teamInfo={[
                    `Founded: ${team.founded}`,
                    `Colors: ${team.clubColors}`,
                    `Stadium: ${team.venue}`,
                    `Website: ${team.website}`,
                  ]}
                  imgUrl={team.crestUrl}
                />
              ),
          )}
          <br />
        </div>
      </div>
    );
  }
}

TeamListPage.propTypes = {
  teams: PropTypes.array.isRequired,
  getTeams: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getTeams: () => dispatch(getTeams()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'teamListPage', reducer });
const withSaga = injectSaga({ key: 'teamListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TeamListPage);
