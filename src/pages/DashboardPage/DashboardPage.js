import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import CurrencyTabPage from '../CurrencyTabPage/CurrencyTabPage';
import Currency from '../../components/Currency/Currency';
import HomeTabPage from '../HomeTabPage/HomeTabPage';
import DiagramTab from '../DiagramTab/DiagramTab';
import css from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  render() {
    const widthDevice = window.screen.width;
    return (
      <div className={css.dashboardWrap}>
        <header className={css.header}>
          <Header />
        </header>
        <main className={`${css.main}`}>
          <div className={css.wrapLeftBar}>
            <Navigation />
            {(widthDevice <= 767 || widthDevice >= 1279) && <Balance />}
            {widthDevice > 1279 && <Currency />}
          </div>
          <div className={css.tabsWrap}>
            <Switch>
              <Route path="/home" exact component={HomeTabPage} />
              <Route path="/diagram" component={DiagramTab} />
              {widthDevice < 768 && (
                <Route path="/currency" component={CurrencyTabPage} />
              )}
              <Redirect to="/home" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default DashboardPage;
