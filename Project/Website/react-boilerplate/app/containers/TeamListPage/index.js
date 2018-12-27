import React from 'react';
import Card from 'components/Card';
import './teamListPage.css';

export default function TeamPage(props) {
  return (
    <div className="bgTeam">
      <div className="container">
        <p />
        {props.data.map(team => (
          <Card
            key={team.id}
            teamName={team.teamName}
            teamInfo={team.teamInfo}
            buttonText={props.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
