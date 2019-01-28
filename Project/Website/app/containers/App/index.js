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
import LoginPage from 'containers/LoginUserPage/Loadable';
import CreatePage from 'containers/CreateUserPage/Loadable';
import TeamListPage from 'containers/TeamListPage/Loadable';
import TeamPage from 'containers/TeamPage/Loadable';
import PlayerPage from 'containers/PlayerPage/Loadable';
import MatchPage from 'containers/MatchPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ReduxToastr from 'react-redux-toastr';

import Header from 'containers/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={CreatePage} />
        <Route exact path="/teams" component={TeamListPage} />
        <Route exact path="/teams/:name" component={TeamPage} />
        <Route exact path="/players/:id" component={PlayerPage} />
        <Route exact path="/matches/:id" component={MatchPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer author="Edgaras Lopatovas" />
      <GlobalStyle />
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </div>
  );
}
