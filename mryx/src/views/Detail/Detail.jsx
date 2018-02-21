import React, { Component } from 'react'
import Details from './Detail.css'
import { connect } from 'react-redux'
import { getProductList } from '../../common/home.js'
import Detail from '../../components/Home/Detail'

class DetailCell extends Component {
    componentDidMount () {
        console.log(123)
        const { dispatch } = this.props
        
        getProductList('/detail')
        .then((val) => {
            console.log(val)
            dispatch({
                type: 'GET_DETAIL_SUCESS',
                detail : val
            })
        })
    }
    render () {
        console.log(123)
        const {detail} = this.props
        return (
            <div>
                { detail !== null ? <Detail {...this.props}/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     console.log(state)
     return {
        detail:state.home.detail
     }
}

export default connect(mapStateToProps)(DetailCell)