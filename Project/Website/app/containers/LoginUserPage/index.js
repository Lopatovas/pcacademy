import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import config from '../../utils/config';
import Style from './style.css';
import makeSelect from './selectors';
import { pushUser } from './actions';
import reducer from './reducer';
import saga from './saga';

class LoginUser extends React.Component {
  handleSubmit = data => {
    this.props.pushUser(data);
  };

  render() {
    return (
      <div className={Style.bgUser}>
        <UserForm buttonText={config.LOGIN_BUTTON} onSubmit={this.handleSubmit}>
          <InputField label={config.USERNAME} name="userName" />
          <InputField label={config.PASSWORD} name="password" type="password" />
        </UserForm>
      </div>
    );
  }
}

LoginUser.propTypes = {
  pushUser: PropTypes.func.isRequired,
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

const withReducer = injectReducer({ key: 'loginUserPage', reducer });
const withSaga = injectSaga({ key: 'loginUserPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginUser);
