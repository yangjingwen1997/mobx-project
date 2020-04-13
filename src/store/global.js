import {observable, action} from 'mobx'

class Global {
  constructor(store){this.store = store}

  @observable bNav=false;
  @observable bFoot=false;
  @observable bLoading=false;

  @action
  updateNav = bl => this.bNav = bl;

  @action
  updateFoot = bl => this.bFoot = bl;

  @action
  updateLoading = bl => this.bLoading = bl;

}

export default Global;