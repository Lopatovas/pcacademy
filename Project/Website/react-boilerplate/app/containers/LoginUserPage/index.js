import React from 'react';
import UserForm from 'components/UserForm';
import config from '../../utils/config';
import Style from './style.css';

export default function LoginUser() {
  function submitPassword() {
    const input = getUserInput();
    console.log(input);
  }

  function getUserInput() {
    const input = {
      userName: document.getElementById('inputLoginUsername').value,
      password: document.getElementById('inputLoginPassword').value,
    };
    return input;
  }
  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.LOGIN_BUTTON} onClick={submitPassword}>
        <div className="form-group">
          <label htmlFor="inputUsername">{config.USERNAME}</label>
          <input className="form-control" type="text" id="inputLoginUsername" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">{config.PASSWORD}</label>
          <input
            className="form-control"
            type="password"
            id="inputLoginPassword"
          />
        </div>
      </UserForm>
    </div>
  );
}
