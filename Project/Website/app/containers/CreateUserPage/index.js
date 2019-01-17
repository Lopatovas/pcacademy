import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import Style from './style.css';
import config from '../../utils/config';

export default class CreateUser extends React.Component {
  handleSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <div className={Style.bgUser}>
        <UserForm
          buttonText={config.REGISTER_BUTTON}
          onClick={this.handleSubmit}
        >
          <InputField label={config.USERNAME} name="username" />
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
