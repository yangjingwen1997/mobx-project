import React, {Component} from 'react';
import styles from './style.module.css'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'


/*
* index     number    1
* data      {_id,title,des}
* to        {pathname:'',apiname:''}
* */


let Cell=({index,data,children,to,history})=>{

  let navigator=(_id)=>{
    if (!to) return;
    let {pathname,apiname}=to;
    history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
  };

  return (
    <div className={styles["uc-cell"]} onClick={()=>navigator(data._id)}>
      {
        children
      }
      <h2>
        {index + 1 ? <span>{index + 1 + '. '}</span> : null}
        {data.title}
      </h2>
      <p>{data.des}</p>

    </div>
  )

};

Cell.defaultProps = {
  index: undefined,
  to: null
};

Cell.propTypes = {
  index: propTypes.number,
  data: propTypes.shape({
    _id: propTypes.string,
    title: propTypes.string,
    des: propTypes.string,
  }).isRequired,
  to: propTypes.shape({
    pathname: propTypes.string,
    apiname: propTypes.string,
  })
};

export default withRouter(Cell)