import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import MatchCard from 'components/MatchCard';
import ForumForm from 'containers/ForumForm';
import Forum from 'containers/Forum';
import { createStructuredSelector } from 'reselect';
import { getFixture } from './actions';
import makeSelect from './selectors';
import reducer from './reducer';
import saga from './saga';
import Style from './style.css';
import makeSelectUser from '../LoginUserPage/selectors';

export class MatchPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getFixture(this.props.match.params.id);
  }

  render() {
    const { fixture } = this.props.fixture;
    return (
      <div className={Style.bgMatch}>
        <div className="container">
          {fixture.match !== undefined ? <MatchCard fixture={fixture} /> : null}
          <br />
          {this.props.user.user.token.length > 1 ? (
            <React.Fragment>
              <ForumForm id={this.props.match.params.id} />
              <Forum id={this.props.match.params.id} />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

MatchPage.propTypes = {
  getFixture: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  fixture: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  fixture: makeSelect(),
  user: makeSelectUser(),
});

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
