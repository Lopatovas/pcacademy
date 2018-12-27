import React from 'react';
import './loginPage.css';

export default function LoginUser(props) {
  return (
    <div className="bgUser">
      <div className="container padding-top">
        <form className="bg-secondary formBox formContent text-white">
          <div className="form-group">
            <label htmlFor="inputUsername">{props.USERNAME}</label>
            <input
              className="form-control"
              type="text"
              id="inputLoginUsername"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">{props.PASSWORD}</label>
            <input
              className="form-control"
              type="password"
              id="inputLoginPassword"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            {props.LOGIN_BUTTON}
          </button>
        </form>
      </div>
    </div>
  );
}
