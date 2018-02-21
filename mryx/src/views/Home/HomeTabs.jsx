import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import './Tab.css'
import ContentDiv from './List/List.js'

class Tab extends React.Component {
  renderContent = tab =>{
    const {content} = this.props;
    //console.log(content, '11111111111');
    return (<div className='tab-cont'>
      {
        content.map((item,idx) => {
          return <ContentDiv key= {idx} text={item}/> 
        })
      }
    </div>
    )
  }

  
  handleChange (arg) {
    this.props.getInternalId(arg.internal_id)
    // console.log(arg)
  }
  render() {
     // console.log(this.props)
    const {mryxList} = this.props
    // console.log(mryxList, '11111111111111111')
   
     //const category_list = mryxList.mryxList.category_list
     for (let key of mryxList) {
        key.title=key.name
    } 
    return (
      <div className='tab-com'>
        <WhiteSpace />
        <Tabs onChange={this.handleChange.bind(this)} tabs={mryxList}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Tab