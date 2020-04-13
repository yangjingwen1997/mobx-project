
import User from './user'
import Goods from './goods'
import Global from './global'

class Store {
  constructor(){
    this.user = new User(this);
    this.goods = new Goods(this);
    this.global = new Global(this);
  }
}

export default new Store();