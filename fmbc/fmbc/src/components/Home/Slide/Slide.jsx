import React, { Component } from 'react';
import styles from './Slide.css'


class Slide extends Component {
    getSlideIdx () {
        const { idx,getSlideId } = this.props
        getSlideId(idx)
    }
    render() {
        const {name,week} = this.props
        //console.log(week())
        return (
            <div className={styles.slide} onClick={this.getSlideIdx.bind(this)}>
                <p>{week()}</p>
                {name}
            </div>
        )
    }
}

export default Slide;
