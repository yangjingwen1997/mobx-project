import {observable, action} from 'mobx'
import axios from '../plugins/axios'

class User {
  constructor(store) {
    this.store = store
  }

  @observable user = {err: 1, msg: '未登录', data: {}, token:''};
  @action
  logout = () => this.user = {err: 1, msg: '未登录', data: {}, token:''};

  @action checkUser = async ({
    collectionName, method = 'post', username, password, icon = null
  }) => {

    let params = null;
    let fromData = null;

    if (collectionName === 'login') {
      params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
    } else if (collectionName === 'reg') {
      fromData = new FormData();
      fromData.append('username', username);
      fromData.append('password', password);
      icon && fromData.append('icon', icon)
    }

    let res = await axios({
      url: `/api/${collectionName}`,
      method,
      data: params ? params : fromData
    });

    if (res.data.err===0){
      //种localStorage 同步user属性
      window.localStorage.setItem('user',JSON.stringify(res.data));
      this.user = res.data;
    }

    //返回执信息
    return res

  }


}

export default User;