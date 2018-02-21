import React, { Component } from 'react'
import styles from './Detail.scss'


class Detail extends Component  {
    render() {
        const { Id,nav } = this.props
        console.log(nav,'****')
        return (
           <div className={styles.detail}>
                   haha
           </div>
             
        )
    }
}

export default Detail