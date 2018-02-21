import React, { Component } from 'react'
import { connect } from 'dva'
import Nav from '../../components/Nav'
import Content from '../../components/Content'
import Swiper from '../../components/Swiper'
import { homeSelectorNav } from '../../models/selector/home.js'

class Home extends Component  {
    componentDidMount () {
        const { dispatch } = this.props
        dispatch({
            type: 'home/fetch'
        })
    }
    render() {
       console.log(this.props,'5555555555555555555')
        const { nav } = this.props
        
        //console.log(nav)
        return (
            <div> 
            <Swiper/>
            <Nav/>
                {
                    nav!==undefined ? <Content {...this.props} nav={nav}/> : ''
                } 
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nav: homeSelectorNav(state)
    }
}

export default connect(mapStateToProps)(Home)