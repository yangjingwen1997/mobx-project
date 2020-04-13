import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import {UcButton} from "../components/uc-button";
import {inject, observer} from "mobx-react";

@inject('goods')
@observer
class Home extends Component{

  componentDidMount(){
    let {update} = this.props.goods;
    update({collectionName:'home',_limit:10});
    update({collectionName:'banner',_limit:5});
  }

  render(){
    let {banner,home}=this.props.goods;
    return (
      <div className="Home">

        <UcSwiper
          data={banner}
          to={{pathname:'/detail',apiname:'banner'}}
        />

        {
          home.map((item,index)=>(
            <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'home'}}
            >
              <UcButton style={{float:'right'}} size="mini">+</UcButton>
            </Cell>
          ))
        }


      </div>
    )
  }

}

export default Home