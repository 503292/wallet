import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { refreshToken } from '../redux/session/sessionOperations';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Loader from './Loader/Loader';
import * as globalSelectors from '../redux/global/globalSelectors';
import * as sessionSelectors from '../redux/session/sessionSelectors';

import css from './App.module.css';
import routes from '../routes/routes';
import 'moment/locale/ru';

class App extends Component {
  state = {};

  static propTypes = {
    refreshCurrentUser: PropTypes.func.isRequired,
  };

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { refreshCurrentUser } = this.props;
    refreshCurrentUser();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className={css.wrapApp}>
        {isLoading && <Loader isLoading={isLoading} />}
        {!isLoading && (
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={routes.LOGIN_PAGE.path}
                component={routes.LOGIN_PAGE.component}
              />
              <Route
                exact
                path={routes.REGISTER_PAGE.path}
                component={routes.REGISTER_PAGE.component}
              />
              <ProtectedRoute
                path={routes.DASHBORD_PAGE.path}
                component={routes.DASHBORD_PAGE.component}
                redirectTo="/login"
              />
              <Redirect to={routes.LOGIN_PAGE.path} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: globalSelectors.getIsLoading(state),
  token: sessionSelectors.getToken(state),
});

const mapDispatchToProps = {
  refreshCurrentUser: refreshToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
