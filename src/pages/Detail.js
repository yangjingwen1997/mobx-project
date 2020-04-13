import React,{Component} from 'react';

import '../assets/css/detail.css';

import zan from '../assets/img/zan.png';//图片引入，模块化使用
import xing from '../assets/img/xing.png';//图片引入，模块化使用
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav/UcNav";
//图片引入，模块化使用
import qs from 'query-string'
import BareScreen from "../components/BareScreen";
import {date} from "../utils/filters";

import {observer,inject} from 'mobx-react'
@inject('goods')
@observer
class Detail extends Component{

  constructor(props){
    super(props);

    let apiname = qs.parse(props.location.search).apiname;
    let _id = props.match.params._id;

    let {update} = this.props.goods;
    update({collectionName:apiname,_id})

  }

  renderPage=({title,des,time,detail:{auth,auth_icon,content}})=>(
    <div>
      <UcNav/>
      <div className="content">
        <div className="header clear"><h2><img width="50" src={`${this.baseUrl2}${auth_icon}`} alt=""/></h2><p>{auth}</p></div>
        <div className="cont">
          <h3>{title}</h3>
          <div className="time"><p>{date(time)}<span><img src={zan} alt=""/></span></p>
          </div>
          <div className="text-box" dangerouslySetInnerHTML={{__html:content}}></div>
        </div>
      </div>
      <div className="foot-btn">
        <ul>
          <li className="say"><a >
            <i><img src={require('../assets/img/say.png')} /></i><span>0</span>
          </a></li>
          <li
            className="zan"
          ><a >
            <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
          </a></li>
          <li className="xing"><a >
            <i><img src={xing} alt=""/></i>
          </a></li>
          <li className="fx"><a>
            <i><img src={fx} alt=""/></i>
          </a></li>
        </ul>
      </div>
    </div>
  );
  renderBareScreen=()=>(<BareScreen/>);

  render(){
    let el=null;
    let detail= this.props.goods.detail;
    if (detail.title) {
      el = this.renderPage(detail)
    }else{
      el = this.renderBareScreen()
    }
    return el;
  }
}

export default Detail