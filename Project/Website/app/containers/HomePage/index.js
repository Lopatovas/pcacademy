import React from 'react';
import TextContainer from 'components/TextContainer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ChampionshipList from 'components/ChampionshipList';
import PropTypes from 'prop-types';
import FixtureList from 'components/FixtureList';
import Style from './style.css';
import makeSelect from './selectors';
import { getTable, getFixtures, setMatchday } from './actions';
import reducer from './reducer';
import saga from './saga';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTable();
    this.props.getFixtures();
  }

  handleTeamListClick = id => {
    this.props.history.push(`teams/${id}`);
  };

  handleMatchClick = id => {
    this.props.history.push(`matches/${id}`);
  };

  handleSlider = event => {
    this.props.setMatchday(event.target.value);
  };

  render() {
    return (
      <div>
        <div className={Style.bg}>
          <div className="container">
            <TextContainer
              title="Greetings"
              text="This site is designed to help people find valuable information 
              about the events that are happening currently at the English Premier League. 
              You can find information about the participating teams and their performance."
            />
            <br />
            <ChampionshipList
              tableName="Standings"
              teams={this.props.table}
              handleTeamClick={this.handleTeamListClick}
            />
            <FixtureList
              tableName="Fixtures"
              fixtures={this.props.fixtures}
              matchday={this.props.matchday}
              handleSlider={this.handleSlider}
              handleMatchClick={this.handleMatchClick}
            />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  getTable: PropTypes.func.isRequired,
  getFixtures: PropTypes.func.isRequired,
  table: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  fixtures: PropTypes.array.isRequired,
  setMatchday: PropTypes.func.isRequired,
  matchday: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getTable: () => dispatch(getTable()),
    getFixtures: () => dispatch(getFixtures()),
    setMatchday: matchday => dispatch(setMatchday(matchday)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
