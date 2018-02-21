import React, { Component } from 'react';
import axios from 'axios'
import styles from './NavItem.css'


class NavItem extends Component {
    click(){
        const { matchCount } = this.props
        const { sportType, getSportType, index, item } =this.props;
       // console.log(this.props, '1111111111');
        const navName = index > 6 
                        && sportType !== 'more' 
                        && sportType !== 'yc' 
                        ? item.name 
                        : '更多'
      // console.log(sportType)
        getSportType(sportType,navName)
    }
    render() {
        //console.log(this.props)
        const { item,matchCount } = this.props
        //console.log(matchCount)
        return (
            <div className={styles["nav-item"]} onClick={this.click.bind(this)}>
                {item.name}
                {item.matchCount}
            </div>
        )
    }
}

export default NavItem;
