import React from 'react';
import './createPage.css';

export default function CreateUser(props) {
  return (
    <div className="bgUser">
      <div className="container padding-top">
        <form className="bg-secondary formBox formContent text-white">
          <div className="form-group">
            <label htmlFor="inputUsername">{props.USERNAME}</label>
            <input className="form-control" type="text" id="inputUsername" />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">{props.EMAIL}</label>
            <input className="form-control" type="email" id="inputEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">{props.PASSWORD}</label>
            <input
              className="form-control"
              type="password"
              id="inputPassword"
              aria-describedby="passwordHelpInline"
            />
            <small id="passwordHelpInline">{props.PASSWORD_INFO}</small>
          </div>
          <button type="submit" className="btn btn-dark">
            {props.BUTTON_TEXT}
          </button>
        </form>
      </div>
    </div>
  );
}
