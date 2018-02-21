import React, { Component } from 'react'
import { Router,Route,Switch,NavLink } from 'dva/router'
import styles from './list.scss'
class Lists extends Component  {
    render() {
        const { haha, location, history } = this.props;
        return (
           <div className={styles.list}>
                <Router history={history}>
                    <div className={styles.lists}>
                        <NavLink className={styles.listss} to={{pathname:"/Detail",state:{xq: haha}}}>
                                <img src={haha.imageurl} alt=""/>
                                <h5>{haha.wname} </h5>
                        </NavLink>
                    </div>
                </Router>
            
           </div>
             
        )
    }
}

export default Lists