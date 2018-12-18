import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homePage/homePage';
import HomePageData from '../src/data/HOMEPAGE_DATA.json';
import TeamListPage from './pages/teamListPage/teamListPage';
import CreatePage from './pages/createUserPage/createPage';
import LoginPage from './pages/loginUserPage/loginPage';
import TeamPage from './pages/teamPage/teamPage';
import PlayerPage from './pages/playerPage/playerPage';

import TeamsData from '../src/data/TEAMS_DATA.json';
import TeamData from '../src/data/TEAM_DATA.json';
import PlayerData from '../src/data/PLAYER_DATA.json';

class App extends Component {

  render() {
    return (
      <div className="App">
      <TeamListPage data={TeamsData}></TeamListPage>
      <Homepage data={HomePageData}/>
      <TeamPage data={TeamData}/>
      <PlayerPage data={PlayerData}></PlayerPage>
      <CreatePage/>
      <LoginPage></LoginPage>
      </div>
    );
  }
}

export default App;
