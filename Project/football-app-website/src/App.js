import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Homepage from './components/homePage/homePage';
import CreateUser from './components/createUserPage/createPage';
import LoginUser from './components/loginUserPage/loginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <body className="App-header">
        <Homepage/>
        <CreateUser userName="User Name" password="Password" email="Email"/>
        <LoginUser></LoginUser>
        </body>
        <Footer author="Edgaras Lopatovas"></Footer>
      </div>
    );
  }
}

export default App;
