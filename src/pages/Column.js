import React,{Component} from 'react';

import Cell from "../components/cell";
import {observer,inject} from 'mobx-react'
@inject('goods')
@observer
class Column extends Component{

  componentDidMount(){
    let {update} = this.props.goods;
    update({collectionName:'column',_limit:10})
  }
  render(){
    let {column}=this.props.goods;
    return (
      <div className="pt">

        {
          column.map(item=>(
            <Cell
              key={item._id}
              data={item}
              to={{pathname:'/detail',apiname:'column'}}
            />
          ))
        }
      </div>
    )
  }
}

export default Column;