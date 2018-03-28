// import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';
import App from './components/App';

// historyインスタンスを生成
const history = createBrowserHistory();
// storeを生成
const store = createStore(history);

ReactDom.render(
  <Provider store={store}>
    {/*
      Linkコンポーネントなどが動作するように
      react-router-domのRouterではなく
      react-router-reduxのConnectedRouterを使う
    */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
