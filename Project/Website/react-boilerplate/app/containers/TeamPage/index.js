import React from 'react';
import PlayerList from 'components/PlayerList';
import TextContainer from 'components/TextContainer';
import StatisticsTable from 'components/StatisticsTable';
import Style from './teamPage.css';
import Team from '../../../internals/mocks/TEAM_DATA.json';

export default function TeamPage() {
  return (
    <div className={Style.bgTeam}>
      <div className="container">
        <div className="row">
          <div className="col">
            <TextContainer title={Team.teamName} text={Team.teamInfo} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PlayerList data={Team.players} />
          </div>
          <div className="col">
            <TextContainer title={Team.teamName} text={Team.teamInfo} />
            <StatisticsTable data={Team.statistics} />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
