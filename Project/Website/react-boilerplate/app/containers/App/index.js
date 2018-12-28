/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginUserPage';
import CreatePage from 'containers/CreateUserPage';
import TeamListPage from 'containers/TeamListPage';
import TeamPage from 'containers/TeamPage';
import PlayerPage from 'containers/PlayerPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={CreatePage} />
        <Route exact path="/teams" components={TeamListPage} />
        <Route exact path="/teams/:name" components={TeamPage} />
        <Route exact path="/players/:id" components={PlayerPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer author="Edgaras Lopatovas" />
      <GlobalStyle />
    </div>
  );
}
