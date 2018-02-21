import React, { Component } from 'react';
import {Route,NavLink,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { ROUTER_MAP } from './router/routerMap'
import AddCarBar from './components/common/AddCarBar'
import './App.css';

@withRouter
class App extends Component {
  render() {
    const { location } = this.props
    console.log(this.props)
    return (
        <div className="box">
        
        <div className="section">
              {
                ROUTER_MAP.ROUTE.map((item, idx) => {
                  return <Route key={idx} exact path={item.path} component={item.component}></Route>
                })
              }
        </div>
        <div className="footer">
        
              {
                /\/detail/.test(location.pathname)
                ? <AddCarBar/>
                : ROUTER_MAP.NAV.map((item,idx) => {
                  return <NavLink key={idx} to={item.to}>{item.text}</NavLink>
                })
              }  
        </div>
                 
        </div>
    );
  }
}

export default connect()(App);
