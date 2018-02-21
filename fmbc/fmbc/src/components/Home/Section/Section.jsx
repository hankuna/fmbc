import React, { Component } from 'react';
import styles from './Section.css'


class Section extends Component {

    render() {
        const { children } = this.props
        return (
            <div className={styles.section}>
                {children}
            </div>
        )
    }
}

export default Section;
