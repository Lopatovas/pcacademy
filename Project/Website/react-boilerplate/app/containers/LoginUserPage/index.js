import React from 'react';
import './loginPage.css';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function LoginUser() {
  return (
    <div className="bgUser">
      <Header />
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
      <Footer author={config.AUTHOR} />
    </div>
  );
}
