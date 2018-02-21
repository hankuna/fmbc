import React, { Component } from 'react'
import Header from './Header'
import './Detail.scss'

class Detail extends Component {
    render() {
        console.log(this.props)
        const {detail} = this.props
        return (
            <div className='detail'> 
            <Header/>
            <div id='hash'>
                <img src={detail.image} alt=""/>
                <h1> {detail.name} </h1>
                <div id="detail">详情</div>
                <div id="anxin">详情222</div>
            </div>
                
            </div>
        )
    }
}
export default Detail