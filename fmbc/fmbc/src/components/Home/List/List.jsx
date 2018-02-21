import React, { Component } from 'react';
import styles from './List.css'
import {
    Route,
    Link
} from 'react-router-dom'


class List extends Component {
    getDetail () {
    const {matchId} = this.props
       //console.log(this.props)
    }

    addStar () {
        const { matchId } = this.props
        //console.log(this.props)
        if (!window.localStorage[matchId]) {
            window.localStorage[matchId] = matchId
        }else{ 
            window.localStorage.removeItem(matchId)
        }
        
    }

    render() {
        const { players ,leagueName,shortName,matchTime,matchId} = this.props
        //console.log(this.props)
        return (
            <div className={styles.list}  onClick={this.getDetail.bind(this)}>
                <span className={styles.shoucang} onClick={this.addStar.bind(this)}>收藏</span> 
                <Link to={"/detail:"+matchId}>
                    <div className={styles.listBox}>
                        <p> {leagueName} <span>{matchTime.split(' ')[1].substr(0,5)} </span>
                             
                        </p>
                        <img src={players[0].picUrl} alt=""/>
                        <span>{players[0].shortName} </span>
                    </div>
                    <div className={styles.listBox}>
                        <img src={players[1] && players[1].picUrl} alt=""/>
                        <span>{players[1] && players[1].shortName} </span>
                    </div>
               </Link>
               
            </div>
        )
    }
}

export default List;
