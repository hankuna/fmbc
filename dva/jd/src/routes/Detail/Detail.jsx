import React, { Component } from 'react'
import styles from './Detail.scss'
import { connect } from 'dva'
import { homeSelectorNav } from '../../models/selector/home.js'
import Details from '../../components/Detaile'

class Detail extends Component  {
    componentDidMount () {
        const { dispatch } = this.props
        dispatch({
            type: 'home/fetch'
        })
    }
    render() {
        const {location,nav} = this.props
        return (
           <div className={styles.detail}>
           {
               location.state !==undefined ?  <img src={location.state.xq.imageurl}  alt=""/> : ''

           }  
            {
               location.state !==undefined ?  <h5>{location.state.xq.wname} </h5> : ''

           } 
           

        

           </div>
             
        )
    }
}

const mapStateToProp = (state) => {
    return {
        nav: homeSelectorNav(state)
    }
}

export default connect(mapStateToProp)(Detail)