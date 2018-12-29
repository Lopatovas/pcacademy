import React from 'react';
import './teamPage.css';
import PlayerList from 'components/PlayerList';
import TextContainer from 'components/TextContainer';
import StatisticsTable from 'components/StatisticsTable';
import Team from '../../../internals/mocks/TEAM_DATA.json';

export default function TeamPage() {
  return (
    <div className="bgTeam">
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
      </div>
    </div>
  );
}
