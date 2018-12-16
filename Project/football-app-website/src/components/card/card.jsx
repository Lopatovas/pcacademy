import React from 'react';
import './card.css';

export default function Card(props){
    return(
        <div class="padding-bottom">
            <div className="card text-white bg-dark text-center">
                
                <div className="card-header">
                    {props.teamName}
                </div>
                <div className="card-body">
                    <p className="text-white card-text">{props.teamInfo}</p>
                    <a href="/" className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        </div>
    );
}