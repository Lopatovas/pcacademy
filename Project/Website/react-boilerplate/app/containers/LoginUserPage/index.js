import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import config from '../../utils/config';
import Style from './style.css';

export default function LoginUser() {
  function submitPassword(event) {
    event.preventDefault();
    console.log(event.target.parentElement.elements);
  }

  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.LOGIN_BUTTON} onClick={submitPassword}>
        <InputField label={config.USERNAME} name="username" />
        <InputField label={config.PASSWORD} name="password" type="password" />
      </UserForm>
    </div>
  );
}
