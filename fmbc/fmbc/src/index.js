import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home'
import Login from './containers/Login'
import Detail from './containers/Detail'
import Zc from './containers/Register/Register'
import App from './App.js'
import store from './Store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
ReactDOM.render(
   <Router>
      <Provider store={store()}>
        <App />
      </Provider>
    </Router>
    
    ,document.getElementById('root'));
