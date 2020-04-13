import {observable,action} from 'mobx'
import axios from '../plugins/axios'

class Goods {

  constructor(store){this.store = store}

  @observable home = [];
  @observable friend = [];
  @observable column = [];
  @observable banner = [];

  @observable detail = {};
  
  @action
  clear = (collectionName)=>this[collectionName]=[];

  @action
  update = async ({collectionName,_page=1,_limit=10,_id=null}) => {
    try {
      let res = await axios({
        url: _id ? `/api/goods/${collectionName}/${_id}`: `/api/goods/${collectionName}`,
        params:{_page, _limit}
      });
      if (_id){
        this.detail = res.data.data
      } else {
        this[collectionName]=res.data.data;
      }
    }catch (e) {
      console.log('store/goods/err',e)
    }
  }
}

export default Goods;