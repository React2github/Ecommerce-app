import React from 'react';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
// import Cookie from 'js-cookie';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- Request-With');

// import config from './config';
// Axios.get(`${config.apiUrl}/my-endpoint`)

// import allReducers from './reducers'
// import { createStore,  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import Axios from 'axios';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   allReducers, 
//   composeEnhancer(applyMiddleware(thunk))
// );
ReactDOM.render(
  <React.StrictMode>
  <Provider store= {store} >
  <App />
  </Provider>,
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
