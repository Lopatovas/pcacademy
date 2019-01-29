import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import config from '../../utils/config';
import Style from './style.css';
import { pushUser } from './actions';
import saga from './saga';
import makeSelect from './selectors';

class LoginUser extends React.Component {
  handleSubmit = data => {
    this.props.pushUser(data);
  };

  componentWillReceiveProps() {
    this.props.history.push('');
  }

  render() {
    return (
      <div className={Style.bgUser}>
        <UserForm
          buttonText={config.LOGIN_BUTTON}
          onSubmit={this.handleSubmit}
          container="container"
        >
          <InputField label={config.USERNAME} name="userName" />
          <InputField label={config.PASSWORD} name="password" type="password" />
        </UserForm>
      </div>
    );
  }
}

LoginUser.propTypes = {
  pushUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = makeSelect();

function mapDispatchToProps(dispatch) {
  return {
    pushUser: data => dispatch(pushUser(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'loginUserPage', saga });

export default compose(
  withSaga,
  withConnect,
)(LoginUser);
