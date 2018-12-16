import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homePage/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage cardCount="8" teamName="Arsenal" buttonText="More!"/>
      </div>
    );
  }
}

export default App;
