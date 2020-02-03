import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';

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
        </main>
      </div>
    );
  }
}

export default DashboardPage;
