import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { refreshToken } from '../redux/session/sessionOperations';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Loader from './Loader/Loader';
import * as globalSelectors from '../redux/global/globalSelectors';
import * as sessionSelectors from '../redux/session/sessionSelectors';
// import * as sessionOperations from '../redux/session/sessionOperations';

import routes from '../routes/routes';
// import css from './App.module.css';

class App extends Component {
  state = {};

  static defaultProps = {
    // token: '',
  };

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    // getUserOperation: PropTypes.func.isRequired,
    // token: PropTypes.string,
  };

  componentDidMount() {
    const { refreshCurrentUser } = this.props;
    refreshCurrentUser();
  }

  // eslint-disable-next-line no-unused-vars
  // componentDidUpdate(prevProps, prevState) {
  //   const { token, getUserOperation } = this.props;
  //   if (!token) {
  //     return;
  //   }
  //   getUserOperation();
  // }

  render() {
    const { isLoading } = this.props;

    return (
      <BrowserRouter>
        {isLoading && <Loader isLoading={isLoading} />}
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
    );
  }
}

App.propTypes = {
  refreshCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: globalSelectors.getIsLoading(state),
  token: sessionSelectors.getToken(state),
});

const mapDispatchToProps = {
  refreshCurrentUser: refreshToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
