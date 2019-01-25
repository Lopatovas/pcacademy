import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Style from './style.css';
import config from '../../utils/config';
import { pushUser } from './actions';
import saga from './saga';

class CreateUser extends React.Component {
  handleSubmit = data => {
    this.props.pushUser(data);
  };

  render() {
    return (
      <div className={Style.bgUser}>
        <UserForm
          buttonText={config.REGISTER_BUTTON}
          onSubmit={this.handleSubmit}
        >
          <InputField label={config.USERNAME} name="userName" />
          <InputField label={config.EMAIL} name="email" type="email" />
          <InputField
            label={config.PASSWORD}
            name="password"
            helperText={config.PASSWORD_REQUIREMENTS}
            type="password"
          />
        </UserForm>
      </div>
    );
  }
}

CreateUser.propTypes = {
  pushUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    pushUser: data => dispatch(pushUser(data)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'createUserPage', saga });

export default compose(
  withSaga,
  withConnect,
)(CreateUser);
