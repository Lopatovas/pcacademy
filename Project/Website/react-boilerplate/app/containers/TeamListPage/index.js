import React from 'react';
import Card from 'components/Card';
import './teamListPage.css';
import Teams from '../../../internals/mocks/TEAMS_DATA.json';

export default function TeamPage() {
  return (
    <div className="bgTeam">
      <div className="container">
        {Teams.map(team => (
          <Card
            key={team.id}
            teamName={team.teamName}
            teamInfo={team.teamInfo}
          />
        ))}
      </div>
    </div>
  );
}
