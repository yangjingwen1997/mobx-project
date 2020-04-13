import React,{Component} from 'react';

import Header from "./header";
import Footer from "./footer";
import {Loading} from "../components/loading/loading";

import {Switch,Route,Redirect} from 'react-router-dom'

import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import NoPage from "../pages/NoPage";

import {observer,inject} from 'mobx-react'

@inject('global')
@observer
class Default extends Component{
  state={};

  static getDerivedStateFromProps(nextProps,nextState){

    let path = nextProps.location.pathname;
    let {updateNav,updateFoot}=nextProps.global;

    if (/home|follow|column/.test(path)){
      updateNav(true);
      updateFoot(true);
    }

    if (/login|reg|detail/.test(path)){
      updateNav(false);
      updateFoot(false);
    }

    if (/user/.test(path)){
      updateNav(false);
      updateFoot(true);
    }

    return null;


  }

  render(){
    let {bNav,bFoot,bLoading} = this.props.global;
    return (
      <div className="default">
        {bLoading && <Loading/> }
        {bNav && <Header/>}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>
          <Route path="/user" component={User}/>
          <Route path="/Login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:_id" component={Detail}/>
          <Redirect exact from="/" to="/home" />
          <Route component={NoPage}/>
        </Switch>
        {bFoot ? <Footer/> : null}
      </div>
    )
  }
}

export default Default