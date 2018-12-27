import React from 'react';
import './teamPage.css';
import PlayerList from 'components/PlayerList';
import TextContainer from 'components/TextContainer';
import StatisticsTable from 'components/StatisticsTable';

export default function TeamPage(props) {
  return (
    <div className="bgTeam">
      <p />
      <div className="container">
        <div className="row">
          <div className="col">
            <TextContainer
              title={props.data.teamName}
              text={props.data.teamInfo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PlayerList data={props.data.players} />
          </div>
          <div className="col">
            <TextContainer
              title={props.data.teamName}
              text={props.data.teamInfo}
            />
            <StatisticsTable data={props.data.statistics} />
          </div>
        </div>
      </div>
      <p />
    </div>
  );
}
