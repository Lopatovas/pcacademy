import React from 'react';
import config from '../../data/config';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import './createPage.css';

export default function CreateUser(props) {
    return (
        <div className="bgUser">
            <Header />
            <div className="container padding-top">
                <form className="bg-secondary formBox formContent text-white">
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
                        <input className="form-control" type="password" id="inputPassword" aria-describedby="passwordHelpInline" />
                        <small id="passwordHelpInline">{config.PASSWORD_REQUIREMENTS}</small>
                    </div>
                    <button type="submit" className="btn btn-dark">{config.REGISTER_BUTTON}</button>
                </form>
            </div>
            <Footer author={config.AUTHOR}/>
        </div>
    );
}