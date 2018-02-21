import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actiona } from '../../store/actions/news.js'

let i =0

class News extends Component {

    constructor (props) {
        super(props)
    }
    handleClick() {
        i++
        this.props.dispatch(actiona(i))
    }

    render() {
        const { a } = this.props
        return (
            <div>news
                <button onClick={this.handleClick.bind(this)}>+</button>
                {a}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    console.log(state,'state-news')
    return {
        a: state.news.a
    }
}

export default connect(mapStateToProps)(News)