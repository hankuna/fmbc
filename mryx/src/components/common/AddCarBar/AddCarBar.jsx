import React, { Component } from 'react'
import './AddCarBar.scss'

class AddCarBar extends Component {
    addProduct () {
        
    }
    render() {
        return (
            <div className='car'>
                <span>
                    0
                </span>               
                <span onClick={this.addProduct.bind(this)}>
                    点击加入购物车
                </span>
            </div>
        )
    }
}
export default AddCarBar