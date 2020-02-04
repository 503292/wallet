import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import HomeTab from '../../components/HomeTab/HomeTab';
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
            <Currency>Currency</Currency>
          </div>
          <div>
            <HomeTab>HomeTab</HomeTab>
          </div>
        </main>
      </div>
    );
  }
}

export default DashboardPage;
