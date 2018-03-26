import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from '../reducers';

// historyはindex.jsxから渡すようにする
const createStore = history => (
  reduxCreateStore(
    // 最初からcombineReducersを使う実装にしておく
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
    ),
  )
);

export default createStore;
