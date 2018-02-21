import React, { Component } from 'react';
import axios from 'axios'
import styles from './NavCell.css'


class NavCell extends Component {
    render() {
        const { children } = this.props
        return (
            <div className={styles['nav-cell']}>
                { children }
            </div>
        )
    }
}

export default NavCell;
