import React, { Component } from 'react'
import styles from './Swiper.scss'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Swiper extends Component  {
       state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
        }
        componentDidMount() {
            // simulate img loading
            setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
            }, 100);
        } 

    render() {
        return (
            <WingBlank>
                <div className="sub-title"></div>
                <Carousel
                autoplay={false}
                infinite
                selectedIndex={1}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}

                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://img1.360buyimg.com/da/jfs/t16366/326/1299608572/403575/8054e023/5a4f2b09Nbdd3b2c3.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
                </WingBlank>
        
        )
    }
}

export default Swiper