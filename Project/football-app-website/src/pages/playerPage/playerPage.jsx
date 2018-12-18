import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/navBar/navBar';
import './playerPage.css';
import PlayerCard from '../../components/playerCard/playerCard';
import StatisticsTable from '../../components/statisticsTable/statisticsTable';
import config from '../../data/config';

export default function PlayerPage(props) {

    return (
        <div className="bgPlayer">
            <Header />
            <p></p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PlayerCard name={props.data.name} info={props.data.info} />
                    </div>
                    <div className="col">
                        <StatisticsTable data={props.data.statistics} />
                    </div>
                </div>
            </div>
            <p></p>
            <Footer author={config.AUTHOR} />
        </div>
    );
}