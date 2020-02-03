import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
// import css from './App.module.css';

class App extends Component {
  state = {};

  render() {
    return (
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
          <Route
            path={routes.DASHBORD_PAGE.path}
            component={routes.DASHBORD_PAGE.component}
          />
          <Redirect to={routes.DASHBORD_PAGE.path} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className={css.app}>
//       <header className="App-header">App</header>
//     </div>
//   );
// }

// export default App;
