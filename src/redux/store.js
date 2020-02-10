import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Logger from 'redux-logger';

import ReduxThunk from 'redux-thunk';
import sessionReducers from './session/sessionReducers';
import financeReducers from './finance/financeReducers';
import globalReducers from './global/globalReducers';

const rootReducer = combineReducers({
  session: sessionReducers,
  finance: financeReducers,
  global: globalReducers,
});

const middleware = [ReduxThunk, Logger];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
