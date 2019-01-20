import React from 'react';
import Card from 'components/Card';
import StatisticsTable from 'components/StatisticsTable';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerData from '../../../internals/mocks/PLAYER_DATA.json';
import Style from './style.css';
import makeSelect from './selectors';
import { setPlayer } from './actions';
import reducer from './reducer';

class PlayerPage extends React.Component {
  componentDidMount() {
    this.props.setPlayer(PlayerData);
  }

  render() {
    const { player } = this.props;
    return (
      <div className={Style.bgPlayer}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card name={player.name} info={player.info} />
            </div>
            <div className="col">
              <StatisticsTable data={player.statistics} />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

PlayerPage.propTypes = {
  player: PropTypes.object,
  setPlayer: PropTypes.func.isRequired,
};

PlayerPage.defaultProps = {
  player: [],
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setPlayer: player => dispatch(setPlayer(player)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'playerPage',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(PlayerPage);
