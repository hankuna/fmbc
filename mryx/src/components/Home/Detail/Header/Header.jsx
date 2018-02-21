import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.scss'

@withRouter
class Header extends Component {
    back () {
        const { history } = this.props
        history.goBack()
    }
    render () {
        return (
            <div>
            <span className='back' onClick={this.back.bind(this)}>返回</span>
                <p>
                    <a href="#detail">商品详情</a>
                    <a href="#anxin">安心保障</a>
                </p>
            </div>
        )
    }
}

export default Header