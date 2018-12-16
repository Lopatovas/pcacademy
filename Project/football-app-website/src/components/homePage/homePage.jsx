import React from 'react';
import './homePage.css';
import Card from '../card/card';
import Footer from '../footer/footer';
import Header from '../navBar/navBar';

export default function Homepage(props) {

    let cards = [];
    for (let j = 0; j < props.cardCount; j++) {
        cards.push(<Card teamName={props.teamName} teamInfo={props.teamInfo}
        buttonText={props.buttonText}/>)
    }

    return (
        <div className="bg-secondary">
            <Header/>
            <div className="container">
                <p>
                    aaa
                </p>
            </div>
            <div className="container">
                {cards.map(card => <div> {card} </div>)}
            </div>
            <Footer author="Edgaras Lopatovas"/>
        </div>
    );
}