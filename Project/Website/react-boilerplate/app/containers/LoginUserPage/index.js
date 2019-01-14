import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import config from '../../utils/config';
import Style from './style.css';

export default function LoginUser() {
  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.LOGIN_BUTTON}>
        <InputField label={config.USERNAME} name="username" />
        <InputField label={config.PASSWORD} name="password" type="password" />
      </UserForm>
    </div>
  );
}
