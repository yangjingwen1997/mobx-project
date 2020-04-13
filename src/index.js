import React from 'react';
import ReactDom from 'react-dom';


//引入全局样式，字体控制js
import './utils/font';
import './assets/css/index.css'

import Default from "./layouts/default";

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './plugins/axios'

//在react应用内部创建全局属性
import {serverBaseUrl,serverBaseUrl2} from './server';
React.baseUrl = serverBaseUrl;
React.baseUrl2 = serverBaseUrl2;
React.Component.prototype.baseUrl=serverBaseUrl;
React.Component.prototype.baseUrl2=serverBaseUrl2;


//引入mobx配置
import store from './store';
import {Provider} from 'mobx-react'

//强刷抓取本地，同步mobx
let local=window.localStorage.getItem('user');
if (local) store.user.user = JSON.parse(local);


ReactDom.render(
  <Provider store={store} {...store}>
    <Router>
      <Route component={Default}/>
    </Router>
  </Provider>
  ,
  document.querySelector('#root')
);



