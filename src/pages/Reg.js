import React,{Component} from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav/UcNav";
import {UcButton} from "../components/uc-button";
import {UcInput} from "../components/uc-input";
import {Link} from "react-router-dom";

import {observer, inject} from 'mobx-react'

@inject('user')
@observer
class Reg extends Component{

  state={
    username:'',
    password:'',
    errorMess:'',
  };

  changeIpt=(ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  };

  reg = ()=>{

    let {username,password} = this.state;
    let {checkUser} = this.props.user;

    checkUser({collectionName:'reg',username, password, icon:this.file.files[0]})
      .then(
        res=>{
          if (res.data.err===0){
            this.props.history.push('/login')
          } else {
            this.setState({errorMess:res.data.msg})
          }
        }
      )

  };

  render(){
    let {username,password,errorMess} = this.state;
    return (
      <div className="content">
        <UcNav arrow="gray" borderWidth={0} bgColor="transparent"/>
        <h1 onClick={()=>this.file.click()}></h1>
        <input type="file" ref={el=>this.file=el} style={{visibility: "hidden"}}/>
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
          <UcInput label="用户" model={{name:'username',value:username,onChange:this.changeIpt}}/>
          <UcInput label="密码" type="password" model={{name:'password',value:password,onChange:this.changeIpt}}/>
          {errorMess}
        </ul>
        <div className="footbox">
          <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.reg}>注册</UcButton>
          <a className="tishi">忘记密码？</a>
        </div>
      </div>

    )
  }
}

export default Reg;