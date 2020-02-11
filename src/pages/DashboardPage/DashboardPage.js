import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import CurrencyTabPage from '../CurrencyTabPage/CurrencyTabPage';
import Currency from '../../components/Currency/Currency';
import HomeTabPage from '../HomeTabPage/HomeTabPage';
import DiagramTab from '../DiagramTab/DiagramTab';
import * as financeOperations from '../../redux/finance/financeOperations';
// import * as sessionSelectors from '../../redux/session/sessionSelectors';

import css from './DashboardPage.module.css';

class DashboardPage extends Component {
  state = {};

  static propTypes = {
    // isLoading: PropTypes.bool.isRequired,
    getFinanceOperation: PropTypes.func.isRequired,
    // token: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // const { token, getFinanceOperation } = this.props;
    const { getFinanceOperation } = this.props;
    // if (!token) {
    //   return;
    // }
    getFinanceOperation();
  }

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

// const mapStateToProps = state => ({
//   // isLoading: globalSelectors.getIsLoading(state),
//   // token: sessionSelectors.getToken(state),
// });

const mapDispatchToProps = dispatch => ({
  getFinanceOperation: () => dispatch(financeOperations.getFinanceAxios()),
});

export default connect(null, mapDispatchToProps)(DashboardPage);
