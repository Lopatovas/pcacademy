import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import MatchCard from 'components/MatchCard';
import { getFixture } from './actions';
import makeSelect from './selectors';
import reducer from './reducer';
import saga from './saga';
import Style from './style.css';

export class MatchPage extends React.Component {
  componentDidMount() {
    this.props.getFixture(this.props.match.params.id);
  }

  render() {
    const { fixture } = this.props;
    return (
      <div className={Style.bgMatch}>
        <div className="container">
          {fixture.match !== undefined ? <MatchCard fixture={fixture} /> : null}
          <br />
        </div>
      </div>
    );
  }
}

MatchPage.propTypes = {
  getFixture: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  fixture: PropTypes.object.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    getFixture: fixtureId => dispatch(getFixture(fixtureId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'matchPage', reducer });
const withSaga = injectSaga({ key: 'matchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MatchPage);
