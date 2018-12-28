import React from 'react';
import config from '../../utils/config';
import './loginPage.css';

export default function LoginUser() {
  return (
    <div className="bgUser">
      <div className="container padding-top">
        <form className="bg-secondary formBox formContent text-white">
          <div className="form-group">
            <label htmlFor="inputUsername">{config.USERNAME}</label>
            <input
              className="form-control"
              type="text"
              id="inputLoginUsername"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">{config.PASSWORD}</label>
            <input
              className="form-control"
              type="password"
              id="inputLoginPassword"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            {config.LOGIN_BUTTON}
          </button>
        </form>
      </div>
    </div>
  );
}
