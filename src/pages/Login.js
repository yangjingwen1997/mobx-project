import React, {Component} from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav/UcNav";
import {UcButton} from "../components/uc-button";
import {UcInput} from "../components/uc-input";

import {Link} from 'react-router-dom'
import qs from 'qs';

import {observer, inject} from 'mobx-react'

@inject('user')
@observer
class Login extends Component {

  state = {
    username: '',
    password: '',
    errorMess: ''
  };

  login = () => {

    this.props.user.checkUser({
      collectionName: 'login',
      username: this.state.username,
      password: this.state.password
    }).then(
      res => {
        if (res.data.err === 0) {

          //跳转到之前
          let path = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).path;

          if (path && !path.includes('/login')) {
            this.props.history.push({
              pathname: qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).path
            })
          } else {
            this.props.history.push('/user')
          }

        } else {
          this.setState({errorMess: res.data.msg})
        }
      }
    )


  };

  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  };

  render() {
    let {username, password, errorMess} = this.state;
    return (
      <div className="content">
        <UcNav arrow="gray" borderWidth={0} bgColor="transparent"/>
        <h1></h1>
        <div className="login-box">
          <p className="lsolid"></p>
          <div className="login">
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className="rsolid"></p>
        </div>
        <ul>
          <UcInput label="用户" model={{name: 'username', value: username, onChange: this.changeIpt}}/>
          <UcInput
            label="密码"
            type="password"
            model={{name: 'password', value: password, onChange: this.changeIpt}}
          />
          {errorMess}
        </ul>
        <div className="footbox">
          <UcButton style={{marginTop: '0.64rem'}} clickHandler={this.login}>登录录</UcButton>
          {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
          {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
          <a className="tishi">忘记密码？</a>
        </div>


      </div>
    )
  }
}

export default Login