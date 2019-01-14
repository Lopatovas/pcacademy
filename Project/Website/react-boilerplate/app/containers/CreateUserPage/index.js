import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import Style from './style.css';
import config from '../../utils/config';

export default function CreateUser() {
  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.REGISTER_BUTTON}>
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
