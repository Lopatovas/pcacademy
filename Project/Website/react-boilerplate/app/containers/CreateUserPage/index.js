import React from 'react';
import UserForm from 'components/Form';
import InputField from 'components/InputField';
import Style from './style.css';
import config from '../../utils/config';

export default function CreateUser() {
  function submit(event) {
    event.preventDefault();
    console.log(event.target.parentElement.elements);
  }

  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.REGISTER_BUTTON} onClick={submit}>
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
