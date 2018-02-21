import React, { Component } from 'react';
import styles from './Detail.scss'



class Detail extends Component {

    render() {
        const {detailList} = this.props
        console.log(detailList)
        return (
            <div className={styles.detail}>
                <div className={styles.title}>
                    {detailList.sportName}-
                    {detailList.players[0].shortName}VS
                    {detailList.players[1].shortName}-
                    {detailList.leagueName}
                </div>
                <div className={styles.img}>
                    <div className={styles.left}>
                        <img src={detailList.players[0].picUrl} alt=""/>
                        <p>{detailList.players[0].shortName}</p>
                    </div>
                    <div className={styles.center}>
                        <p>下半场49`</p>
                        <h2>{detailList.handicapStatus}:{detailList.handicapType} </h2>
                    </div>
                    <div className={styles.right}>
                        <img src={detailList.players[1] && detailList.players[1].picUrl} alt=""/>
                        <p>{detailList.players[1].shortName} </p>
                    </div>
                </div>
                <div className={styles.whilts}>
                    {
                    detailList.playtypes.map((item, index) => {
                        return <div key={index} className={styles.Accordlist}>
                        <div className={styles.playbox}>{item.playtypeName}</div>
                        {
                            detailList.playtypes[index].optionName.split(',').map((itm,inde)=>{
                            return <div className={styles.Accdiv} key={inde}>
                                    <h4>{itm}</h4>
                                    <p>{item.sp.split(',')[0]}</p>
                                    </div>
                            })
                        }
                        
                        </div>
                    })
                    }

      </div>
            </div>
        )
    }
}

export default Detail;
