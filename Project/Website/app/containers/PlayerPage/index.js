import React from 'react';
import Card from 'components/Card';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './style.css';
import makeSelect from './selectors';
import { getPlayer } from './actions';
import reducer from './reducer';
import saga from './saga';

class PlayerPage extends React.Component {
  componentDidMount() {
    this.props.getPlayer(this.props.match.params.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className={Style.bgPlayer}>
        <div className="container">
          <div>
            <div>
              <Card
                title={player.name}
                info={`${player.name} is a football player from ${
                  player.nationality
                }. He was born in ${player.dateOfBirth}. He is playing in the ${
                  player.position
                } position. His shirt number is ${player.shirtNumber}.`}
              />
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
  match: PropTypes.object.isRequired,
  getPlayer: PropTypes.func.isRequired,
};

PlayerPage.defaultProps = {
  player: [],
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getPlayer: playerId => dispatch(getPlayer(playerId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'playerPage', reducer });
const withSaga = injectSaga({ key: 'playerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlayerPage);
