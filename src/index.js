import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './Home/Home';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import appReducer from './reducers';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'));

