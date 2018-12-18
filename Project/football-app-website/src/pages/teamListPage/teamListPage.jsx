import React from 'react';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import './teamListPage.css'
import config from '../../data/config';

export default function TeamPage(props) {

    return (
        <div className="bgTeam">
            <Header />
            <div className="container">
                <p></p>
                {props.data.map(team => (<Card key={team.id} teamName={team.teamName} teamInfo={team.teamInfo} buttonText={props.buttonText} />))}
            </div>
            <Footer author={config.AUTHOR} />
        </div>
    );
}