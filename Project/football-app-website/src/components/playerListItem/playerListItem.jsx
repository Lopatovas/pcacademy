import React from 'react';
import './playerListItem.css';

export default function PlayerListItem(props) {

    return (
        <div>
            <div className="text-left playerCard">
                <a href="/">
                    <h5 className="text-white">{props.name}</h5>
                    <p className="text-white">{props.position}</p>
                </a>
            </div>
        </div>
    );
}