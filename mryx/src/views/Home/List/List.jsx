import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'


@withRouter
class List extends Component {
    goToDetail () {
        console.log(this.props,'list')
        const { history } = this.props
        history.push('/detail')
    }
    render () {
        
        const { text } = this.props        
        return (
            <div className="list" onClick={ () => this.goToDetail()}>
                <img src={text.image} alt=""/>
                <h1>{text.name}</h1>
                <h3>{text.subtitle} </h3>
                <p> <span> </span> </p>
            </div>
        )
    }
}

export default List