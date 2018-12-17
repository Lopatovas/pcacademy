import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homePage/homePage';
import Data from '../src/data/homePage';
import TeamPage from './pages/teamPage/teamPage';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Homepage aboutTitle= {Data.homePageAboutTitle} aboutText={Data.homePageAboutText} author={Data.author}
                  startedTitle={Data.homePageStartTitle} startedText={Data.homePageStartText}/>
      </div>
    );
  }
}

export default App;
