import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter //修改 类 的行为
class Header extends Component {
    handleClick () {
        cosnole.log(this.props)
    }
    render () {
        return (
            /* <div>
                <button onClick={() => this.handClick()}>点击到Vip页面</button>
            </div> */
        )
    }
}