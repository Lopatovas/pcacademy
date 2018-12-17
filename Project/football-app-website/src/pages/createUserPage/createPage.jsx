import React from 'react';

export default function CreateUser(props){
    return(
        <div>
            <form>
            <div className="form-group">
                    <label htmlFor="inputUsername">{props.userName}</label>
                    <input className="form-control" type="text" id="inputUsername"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">{props.email}</label>
                    <input className="form-control" type="email" id="inputPassword"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">{props.password}</label>
                    <input className="form-control" type="password" id="inputPassword" aria-describedby="passwordHelpInline"/>
                    <small id="passwordHelpInline" class="text-muted">Must be 8-20 characters long.</small>
                </div>
                <button type="submit" class="btn btn-dark">Register!</button>
            </form>
        </div>
    );
}