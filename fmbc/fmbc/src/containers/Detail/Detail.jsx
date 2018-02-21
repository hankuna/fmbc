import React, { Component } from 'react';
import styles from './Detail.scss'
import Details from '../../components/Home/Detail'
import { connect } from 'react-redux'
import { getList } from '../../Common/api.js'
import { getDetailList } from '../../Store/actions/home.js'




class Detail extends Component {
    componentDidMount() {
        const { dispatch,location} = this.props
        const ID=location.pathname.split(":")[1]
        getList(`https://trad-pusher.8win.com/match/v2?t=1516004166794&s=51e90aa082614e34b48ac3482cca9b51&k=cn020001${ID}`)
		.then((res) => {
            //console.log(res)
			const list = JSON.parse(res.data.data)
            //console.log(list,'2111')  
            dispatch(getDetailList(list))    
		})
    }
    render() {
        console.log(this.props)
        const { detailList} = this.props
        return (
            <div className={styles.detail}>
            {
                detailList !== null ?<Details detailList={detailList}/> : ''
            }
                
                    

                
            </div>
        )
    }
}
const mapStateTo = (state) => {
    return {
        detailList: state.detailList
    }
}

export default connect(mapStateTo)(Detail);
