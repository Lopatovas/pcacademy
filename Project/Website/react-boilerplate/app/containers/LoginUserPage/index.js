import React from 'react';
import config from '../../utils/config';
import Style from './style.css';

export default function LoginUser() {
  return (
    <div className={Style.bgUser}>
      <div className={`container ${Style.paddingTop}`}>
        <form
          className={`bg-secondary 
          ${Style.formBox} 
          ${Style.contentPadding} 
          text-white`}
        >
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
          <button type="submit" className={`${Style.buttonCurve} btn btn-dark`}>
            {config.LOGIN_BUTTON}
          </button>
        </form>
      </div>
    </div>
  );
}
