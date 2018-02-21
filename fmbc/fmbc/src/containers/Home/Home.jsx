import React, { Component } from 'react';
import styles from './Home.scss'
import { getList } from '../../Common/api'
import { baseurl } from '../../Common/baseurl'
import NavCell from '../../components/Home/NavCell'
import NavItem from '../../components/Home/NavItem'
import LeageBar from '../../components/Home/LeageBar'
import Section from '../../components/Home/Section'
import List from '../../components/Home/List/List'
import Slide from '../../components/Home/Slide'
import { connect } from 'react-redux';
import { 
        getNavList,
        GetList,
        getSportType,
        originNav,
        getFilterJson,
        getSlideIndex
} from '../../Store/actions/home'
//console.log(styles)

class Home extends Component {
    componentDidMount(){

        const { dispatch } = this.props
        getList(`${ baseurl }/api/nav`)
        .then((res)=>{
         //   console.log(res.data)
            const nav= res.data.data.data
            const newNav = [...nav,
            ...nav]

            dispatch(originNav(newNav))
            this.initNav(newNav)
            
           // console.log(res.data.data.data)
        })
        this.getInitList()
    }

    initNav (newNav,name='更多') {
        const { dispatch } = this.props
        let sliceNav = null

            if(newNav.length > 7) {
                sliceNav = newNav.slice(0,7)
            }
            sliceNav.push({name: name,sportType: 'more'})
            dispatch(getNavList(sliceNav))
    }

    saveSporType(id,name){
        //console.log(name)
        const { dispatch,originNav,gameList } = this.props
        if(id !== 'more' && id !== 'yc'){
            if(id < 10){
                id = `0${id}`
            }
            dispatch(getSportType(id))
            this.getInitList(id)
            this.initNav(originNav,name)
        }else if(id === 'more'){
            const {originNav} = this.props;
            
            dispatch(getNavList([...originNav,{name: '隐藏',sportType:'yc'}]))
        }else{
            this.initNav(originNav,name)
        }       
    }

    getInitList (id='01') {
        const { dispatch } = this.props
        getList(`https:trad-pusher.8win.com/match/v2?k=cn0100${id}`)
            .then((res)=>{
                const list= JSON.parse(res.data.data)
                //获取所有列表数据
                dispatch(GetList(list))
                this.getNameList(list)
                this.getListFilter(list)
            })
    }
    getNameList (gameList) {
        const arr =[]
        if(gameList !==null){
            for(let item of gameList){   
                const key = item.matchTime.split(' ')[0]
                arr.push(key)
            }
        }
        const arrs = new Set(arr)
        const json = []
        for(let i of [...arrs]){
            json[i]=[]
            for(let item of gameList){   
                const key = item.matchTime.split(' ')[0]
                if( i === key ){
                    json[i].push(item)
                }
            }
        }
    }

    getListFilter (gameList) {
        const { dispatch } =  this.props
        const slide = []
        const json = {}
        if(gameList !== null) {
             for(let item of gameList){
                 const matchTime = item.matchTime.split(' ')[0]
                 slide.push(matchTime)
             }
             const slideArr = new Set(slide)

             for(let item of slideArr) {
                 json[item] = []
                for(let list of gameList) {
                    const matchTime = list.matchTime.split(' ')[0]
                    if(item === matchTime) {
                        json[item].push(list)
                    }
                }
             }
             dispatch(getFilterJson(json))
        } 
    }
    renderList (filterList) {
        const { slideIndex } = this.props
        const item = Object.values(filterList)[slideIndex]
       // console.log(item,'1111')
        return item && item.map((list,idx) => {
            return <List {...list} key={idx}/>
        })
    }
    saveSlideIdx (idx) {
        const { dispatch } = this.props
        dispatch(getSlideIndex(idx))
    }
    getWeek (day) {
        const week = ['日','一','二','三','四','五','六']
        const d = new Date(day)
        //console.log(day,'====')
        return `星期${week[d.getDay()]}`
    }
    renderSlide(filterList) {
        
       return Object.keys(filterList).map((item, idx) => {
            return(
                <Slide 
                    getSlideId={this.saveSlideIdx.bind(this)} 
                    name={item}
                    week={this.getWeek.bind(this,item)}
                    idx={idx} 
                    key={idx}
                />
            ) 
        })
    }
    test () {
        const { dispatch } = this.props
        dispatch({
            type: 'REQUEST'
        })
    }
    render() {
        const { Nav,SportType,gameList,filterList } = this.props
        const flag = SportType ==="00"  ||  SportType ==="01" 
        const filterJson = filterList !== null && filterList
       // console.log(this.props.filterList)

        return (
            <div className={styles.home}>
            <button className={styles.btn} onClick={this.test.bind(this)}>add测试saga</button>
                <NavCell>
                    {
                        Nav !==null && Nav.map((item,idx)=>{
                            return <NavItem 
                                    getSportType={this.saveSporType.bind(this)} 
                                    index={idx}
                                    item={item} 
                                    matchCount={item.matchCount} 
                                    sportType={item.sportType}
                                    key={idx} />
                        })
                    }   
                </NavCell>
                <LeageBar gameList={gameList} isLeageName={ flag }/>
                <Section>
                    <div className={styles.left}>
                        {
                            this.renderSlide(filterJson)
                        }
                        
                    </div>
                    <div className={styles.right}>
                        {
                            this.renderList(filterJson)
                        }
                    </div>
                    
                </Section>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Nav:  state.Nav,
        gameList: state.gameList,
        SportType: state.SportType,
        originNav: state.originNav,
        filterList: state.filterList,
        slideIndex: state.slideIndex,
        detailList: state.detailList
    }
}


export default connect(mapStateToProps)(Home);
 
