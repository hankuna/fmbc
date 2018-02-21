import React, { Component } from 'react';
import styles from './LeageBar.scss'


class LeageBar extends Component {
    static defaultProps = {
        isLeageName: true
    }
    addStar () {
        const { gameList } = this.props
        for(let item of gameList) {
           Object.keys(window.localStorage).map((i) => {
               if(i == item.matchId){
                    console.log(item)
                    }
           })
        }
        
        console.log(gameList,'11111')
        console.log(window.localStorage)
    }
    render() {
        const { isLeageName }=this.props
        //console.log(isLeageName)
        return (
            <div className={styles.leageBar}>
                <div className={styles.left}>
                    <span>按时间&nbsp;&nbsp;</span>
                    {isLeageName ? <span>按联赛&nbsp;</span> : ''}
                    <span onClick={this.addStar.bind(this)}> 我的关注</span>
                </div>
                <div className={styles.right}>
                    <span>icon</span>
                </div>
            </div>
        )
    }
}

export default LeageBar;
