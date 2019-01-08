import React from 'react';
import UserForm from 'components/UserForm';
import Style from './style.css';
import config from '../../utils/config';

export default function CreateUser() {
  function submit() {
    const user = storeUserData();
    console.log(user);
  }

  function storeUserData() {
    const user = {
      userName: document.getElementById('inputUsername').value,
      email: document.getElementById('inputEmail').value,
      password: document.getElementById('inputPassword').value,
    };
    return user;
  }

  return (
    <div className={Style.bgUser}>
      <UserForm buttonText={config.REGISTER_BUTTON} onClick={submit}>
        <div className="form-group">
          <label htmlFor="inputUsername">{config.USERNAME}</label>
          <input className="form-control" type="text" id="inputUsername" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">{config.EMAIL}</label>
          <input className="form-control" type="email" id="inputEmail" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">{config.PASSWORD}</label>
          <input
            className="form-control"
            type="password"
            id="inputPassword"
            aria-describedby="passwordHelpInline"
          />
          <small id="passwordHelpInline">{config.PASSWORD_REQUIREMENTS}</small>
        </div>
      </UserForm>
    </div>
  );
}
