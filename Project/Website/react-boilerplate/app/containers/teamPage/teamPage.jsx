import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import './teamPage.css';
import PlayerList from '../../components/playerList/playerList';
import TextContainer from '../../components/textContainer/textContainer';
import StatisticsTable from '../../components/statisticsTable/statisticsTable';
import config from '../../data/config';

export default function TeamPage(props) {

    return (
        <div className="bgTeam">
            <Header />
            <p></p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TextContainer title={props.data.teamName} text={props.data.teamInfo} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <PlayerList data={props.data.players} />
                    </div>
                    <div className="col">
                        <TextContainer title={props.data.teamName} text={props.data.teamInfo} />
                        <StatisticsTable data={props.data.statistics} />
                    </div>
                </div>
            </div>
            <p></p>
            <Footer author={config.AUTHOR} />
        </div>
    );
}