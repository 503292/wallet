import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../DiagramTab/DiagramTab';
import css from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  render() {
    const widthDevice = window.screen.width;
    return (
      <div className={css.dashboardWrap}>
        <header>
          <Header />
        </header>
        <main className={css.main}>
          <div className={css.wrapLeftBar}>
            <Navigation>Nav</Navigation>
            <Balance>Balance</Balance>
            <Currency>Currency</Currency>
          </div>
          <div className={css.tabsWrap}>
            <Switch>
              <Route path="/home" exact component={HomeTab} />
              <Route path="/diagram" component={DiagramTab} />

              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </div>
          {widthDevice <= 1023 && widthDevice >= 768 && (
            <Currency>Currency</Currency>
          )}
        </main>
      </div>
    );
  }
}

export default DashboardPage;
