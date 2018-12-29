import React from 'react';
import './playerPage.css';
import PlayerCard from 'components/PlayerCard';
import StatisticsTable from 'components/StatisticsTable';
import PlayerData from '../../../internals/mocks/PLAYER_DATA.json';

export default function PlayerPage(props) {
  return (
    <div className="bgPlayer">
      <div className="container">
        <div className="row">
          <div className="col">
            <PlayerCard name={PlayerData.name} info={PlayerData.info} />
          </div>
          <div className="col">
            <StatisticsTable data={PlayerData.statistics} />
          </div>
        </div>
      </div>
    </div>
  );
}
