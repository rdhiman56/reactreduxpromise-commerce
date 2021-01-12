import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

const createMiddlewareStore = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={createMiddlewareStore(rootReducer)}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
