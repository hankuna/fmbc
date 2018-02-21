import React, {Component} from 'react'
import { getIndexList,getProductList } from '../../common/home.js'
import axios from 'axios'
import { connect } from 'react-redux'
import HomeHeader from './HomeHeader'
import HomeTabs from './HomeTabs'
import { actionA,actionB,actionC } from '../../store/actions/home.js'
import './home.css'

class Home extends Component {
    componentDidMount () {
        const { dispatch } = this.props
        getIndexList('/api/list')
        .then((val) => {
            // console.log(val,'/api/list')
            dispatch(actionA(val.product_list.products,val.category_list))
      //   console.log(val)
        })
    }
    saveGetInternalId(url){
        const { dispatch } = this.props
        //console.log(url,'===')
        getProductList(url)        
        .then((val) => {
         //console.log(val)
            dispatch(actionC)
            dispatch(actionB(val.products))
        })
    }
    render() {
       // console.log(this.props)
        const { content } = this.props;
      return (
            <div className='home'>
                <HomeHeader/>
                { content !== null ? <HomeTabs getInternalId={(id) => this.saveGetInternalId(id)} {...this.props}/> : '' }                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     // console.log(state)
    return {
       mryxList : state.home.mryxList,
       content : state.home.content
    }
}

export default connect(mapStateToProps)(Home)