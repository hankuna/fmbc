import React, {Component} from 'react'


class Vips extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>vips</div>
        )
    }
}

export default Vips