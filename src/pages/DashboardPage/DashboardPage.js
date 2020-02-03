import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import HomeTab from '../HomeTab/HomeTab';
import DiagramTab from '../DiagramTab/DiagramTab';

import css from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  render() {
    return (
      <div className={css.dashboardWrap}>
        <header>
          <Header />
        </header>
        <main>
          <div className={css.wrapLeftBar}>
            <Navigation>Nav</Navigation>
            <Balance>Balance</Balance>
          </div>
          <div>
            <Switch>
              <Route path="/home" exact component={HomeTab} />
              <Route path="/diagram" component={DiagramTab} />

              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default DashboardPage;
