import React from 'react';
import './playerPage.css';
import PlayerCard from 'components/PlayerCard';
import StatisticsTable from 'components/StatisticsTable';

export default function PlayerPage(props) {
  return (
    <div className="bgPlayer">
      <p />
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
      <p />
    </div>
  );
}
