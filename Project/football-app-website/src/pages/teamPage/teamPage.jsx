import React from 'react';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';

export default function TeamPage(props) {

    let cards = [];
    for (let j = 0; j < props.cardCount; j++) {
        cards.push(<Card teamName={props.teamName} teamInfo={props.teamInfo}
        buttonText={props.buttonText}/>)
    }

    return (
        <div className="bg-secondary">
            <Header/>
            <div className="container">
                {cards.map(card => <div> {card} </div>)}
            </div>
            <Footer author="Edgaras Lopatovas"/>
        </div>
    );
}