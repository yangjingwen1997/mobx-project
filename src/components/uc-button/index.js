import React,{Component} from 'react';

import styles from './uc-button.module.css'
import propTypes from 'prop-types';

export const UcButton = ({clickHandler,children,size,style}) => (
  <button
    type="button"
    className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}
    style={style}
    onClick={(ev)=>clickHandler(ev)}
  >
    {children ? children : '按钮'}
  </button>
);

UcButton.defaultProps={
  clickHandler:()=>{},
  size:'default',
  style:{}
};

UcButton.propTypes={
  clickHandler: propTypes.func,
  type: propTypes.string, // mini
  style: propTypes.object,
};

