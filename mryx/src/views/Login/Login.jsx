import React, { Component } from 'react'
import { List, InputItem, Toast } from 'antd-mobile'
import { post } from '../../common/api'

class Login extends Component {
    constructor () {
        super()
        this.state = {
        hasError: false,
        value: '',
        autn: '',
        lock: false
    }
    }
    
    onErrorClick = () => {
        if (this.state.hasError) {
        Toast.info('请输入11位数字');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
        this.setState({
            hasError: true,
        });
        } else {
        this.setState({
            hasError: false,
        });
        }
        this.setState({
        value,
        lock:value.length == 13 ? true : false
        },() => {
            console.log(this.state)
        });
  }
  getAuthCode () {
      const { value,lock } = this.state
      console.log(lock)
      if(!lock) return
      post('/autn', {
          phone: value,
          uid: document.cookie.uid
      })
      .then((res) => {
          console.log(res)
      })
  }
  onChangeAutn (autn) {
        this.setState({
        autn,
        });
        console.log(autn)
  }
  blur (value) {
      console.log(value)
  }
  login(){
      const { autn,value } = this.state
      post('/login',{
          autn,
          value
      })
      .then((res)=> {
          console.log(res, '===')
      })
  }
    render () {
        return (
            <div>
                <List renderHeader={() => '用户登录'}>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                </List>
                <div onClick={this.getAuthCode.bind(this)}>获取验证码</div>
                <List renderHeader={() => '验证码'}>
                    <InputItem
                        type="phone"
                        placeholder="请输入验证码"
                        onChange={this.onChangeAutn.bind(this)}
                        value={this.state.autn}
                        onBlur={this.blur.bind(this)}
                    >验证码</InputItem>
                </List>
                <div onClick={this.login.bind(this)}>登录</div>
            </div>
        )
    }
}

export default Login