import React from 'react';
import PlayerCard from 'components/PlayerCard';
import StatisticsTable from 'components/StatisticsTable';
import Style from './style.css';
import PlayerData from '../../../internals/mocks/PLAYER_DATA.json';

export default function PlayerPage() {
  return (
    <div className={Style.bgPlayer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <PlayerCard name={PlayerData.name} info={PlayerData.info} />
          </div>
          <div className="col">
            <StatisticsTable data={PlayerData.statistics} />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
