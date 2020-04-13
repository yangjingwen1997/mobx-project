import React,{Component} from 'react';
import Cell from "../components/cell";

import {observer,inject} from 'mobx-react'
@inject('goods')
@observer
class Follow extends Component{

  componentDidMount(){
    let {update} = this.props.goods;
    update({collectionName:'friend',_limit:10})
  }

  render(){
    let {friend}=this.props.goods;
    console.log(this.props.goods)
    return (
      <div className="pt">
        {
          friend.map((item,index) => (
            <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'friend'}}
            >
              <button style={{float:'right'}}>+</button>
            </Cell>
          ))
        }

      </div>
    )
  }
}

export default Follow