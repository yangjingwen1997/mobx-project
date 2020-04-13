import React,{Component} from 'react';
import styles from  '../assets/css/user.module.css'

import {observer, inject} from 'mobx-react'

@inject('user')
@observer
class User extends Component{
  logout=()=>{
    window.localStorage.removeItem('user');
    this.props.user.logout();
    this.props.history.push('/login')
  };

  render(){
    let {user:{data:{fans,follow,icon,nikename}}} = this.props.user;
    return (
      <div className={styles.content}>
        <div className={styles.header}>
          <h2><img src={this.baseUrl2+icon} alt=""/></h2>
          <div className={styles["user-box"]}>
            <a>{nikename}</a>
            <a onClick={this.logout}>注销</a>
          </div>
          <ul className={styles.clear}>
            <li>
              <span>{follow}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{fans}</span>
              <p className={styles.end}>粉丝</p>
            </li>
          </ul>
        </div>
        <div className={styles.docList}>
          <ul>
            <li className={styles["gk-text"]}>
              <i></i>
              <p>每日推荐</p>
              <b></b>
              <span>17</span>
            </li>
            <li className={styles["mm-text"]}>
              <i></i>
              <p>歌单</p>
              <b></b>
              <span>25</span>
            </li>
            <li className={styles["cg-text"]}>
              <i></i>
              <p>排行榜</p>
              <b></b>
              <span>99</span>
            </li>
            <li className={styles["sc-text"]}>
              <i></i>
              <p>电台</p>
              <b></b>
              <span>24</span>
            </li>
            <li className={styles.my_cz}>
              <i></i>
              <p>直播</p>
              <span className={styles.time}>08:00</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default User