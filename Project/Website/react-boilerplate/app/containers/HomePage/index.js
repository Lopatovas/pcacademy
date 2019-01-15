import React from 'react';
import TextContainer from 'components/TextContainer';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FixtureList from 'components/FixtureList';
import PropTypes from 'prop-types';
import Style from './style.css';
import HomePageData from '../../../internals/mocks/HOMEPAGE_DATA.json';
import makeSelect from './selectors';
import { setFixtures } from './actions';
import reducer from './reducer';
import Fixtures from '../../../internals/mocks/FIXTURES.json';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.setFixtures(Fixtures);
  }

  render() {
    return (
      <div>
        <div className={Style.bg}>
          <div className="container">
            {HomePageData.map(text => (
              <TextContainer
                key={text.id}
                title={text.title}
                text={text.text}
              />
            ))}
            <br />
            <FixtureList tableName="Fixtures" fixtures={this.props.fixtures} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  setFixtures: PropTypes.func.isRequired,
  fixtures: PropTypes.array.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    setFixtures: fixtures => dispatch(setFixtures(fixtures)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'homePage',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(HomePage);
