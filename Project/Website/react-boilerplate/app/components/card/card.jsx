import React from 'react';
import './card.css';
import config from '../../data/config';

export default function Card(props) {
    return (
        <div className="padding-bottom">
            <div className="card text-white bg-secondary text-center">

                <div className="card-header bg-dark">
                    {props.teamName}
                </div>
                <div className="card-body">
                    <p className="text-white card-text">{props.teamInfo}</p>
                    <a href="/" className="btn btn-dark">{config.TEAM_CARD_BUTTON}</a>
                </div>
            </div>
        </div>
    );
}