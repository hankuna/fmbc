import React, { Component } from 'react'
import styles from './Content.scss'

import Lists from '../lists';
class Content extends Component  {
    render() {
        const { nav, location, history } = this.props; 
        return (          
           <div className={styles.content}>
                {
                    nav.map((item,idx) => {
                    return <Lists key={idx} haha={item} {...this.props}></Lists>    
                    })
                }                
           </div>
             
        )
    }
}

export default Content