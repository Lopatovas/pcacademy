import React from 'react';
import './textContainer.css'

export default function Homepage(props) {

    return (
        <div className="background">
            <div className="bg-secondary box">
                <h4 className="text-white title">{props.title}</h4>
                <p className="text-white text-left text">{props.text}</p>
            </div>
        </div>
    );
}