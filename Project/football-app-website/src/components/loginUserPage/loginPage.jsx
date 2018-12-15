import React from 'react';

export default function LoginUser(){
    return(
        <div>
            <form>
            <div className="form-group">
                    <label htmlFor="inputUsername">User Name</label>
                    <input className="form-control" type="text" id="inputUsername"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input className="form-control" type="password" id="inputPassword" aria-describedby="passwordHelpInline"/>
                    <small id="passwordHelpInline" class="text-muted">Must be 8-20 characters long.</small>
                </div>
                <button type="submit" class="btn btn-dark">Login!</button>
            </form>
        </div>
    );
}