import React from 'react';
import Style from './createPage.css';
import config from '../../utils/config';

export default function CreateUser() {
  return (
    <div className={Style.bgUser}>
      <div className={`container ${Style.paddingTop}`}>
        <form
          className={`${Style.formBox} 
          ${Style.contentPadding}
          bg-secondary text-white`}
        >
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
            <small id="passwordHelpInline">
              {config.PASSWORD_REQUIREMENTS}
            </small>
          </div>
          <button type="submit" className={`${Style.buttonCurve} btn btn-dark`}>
            {config.REGISTER_BUTTON}
          </button>
        </form>
      </div>
    </div>
  );
}
