import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'
//import { createStore } from 'redux'
import store from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import information from './mock'

if(process.env.NODE_EW === 'development'){
    //请求的数据实现上还是开发
}
information()

ReactDOM.render(
    <Provider store={store()}>            
    <Router>
        <App />
    </Router>
    </Provider> ,
    document.getElementById('root')
);
registerServiceWorker();
