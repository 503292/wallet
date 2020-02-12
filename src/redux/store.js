import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import sessionReducers from './session/sessionReducers';
import financeReducers from './finance/financeReducers';
import globalReducers from './global/globalReducers';

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducers),
  finance: financeReducers,
  global: globalReducers,
});
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
