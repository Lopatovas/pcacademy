import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import './createPage.css';

export default function CreateUser(props) {
  return (
    <div className="bgUser">
      <Header />
      <div className="container padding-top">
        <form className="bg-secondary formBox formContent text-white">
          <div className="form-group">
            <label htmlFor="inputUsername">{props.username}</label>
            <input className="form-control" type="text" id="inputUsername" />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">{props.email}</label>
            <input className="form-control" type="email" id="inputEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">{props.password}</label>
            <input
              className="form-control"
              type="password"
              id="inputPassword"
              aria-describedby="passwordHelpInline"
            />
            <small id="passwordHelpInline">Temp</small>
          </div>
          <button type="submit" className="btn btn-dark">
            {props.buttonText}
          </button>
        </form>
      </div>
      <Footer author="Edgaras Lopatovas" />
    </div>
  );
}
