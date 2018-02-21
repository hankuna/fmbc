import React, { Component } from 'react';
import { routermap } from './Router/routermap';
import axios from 'axios';
import styles from './App.scss'
//import './App.scss';
import './css/animation.css';
import './css/common.css';
import './css/reset.css';
import {
    Route,
    NavLink
  } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                {<div className={styles.header}>
                    <ul className={styles.ul}>
                        <li>未登录</li>
                        <li>分秒必猜</li>
                        <li>icon</li>
                    </ul>
                </div>}
                <div className="content">
                        {
                            routermap.ROUTE.map((item, idx) => {
                            return <Route key={idx} exact path={item.path} 
                                    component={item.component}></Route>
                        })
                    }
                    </div>
                    <div className={styles.foots}>
                    <ul>
                         {
                            routermap.NAV.map((item, idx) => {
                            return (
                              <li key={idx}>
            
                                <NavLink to={item.to}>{item.text}</NavLink>
                              </li>
                            )
                          })
                      }      
                   </ul>
                  </div>
            </div>
        )
    }
}
export default App;
