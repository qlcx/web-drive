import { observable, action } from 'mobx';
import FetchAPI from '../utils/fetchAPI';

class LoginMobx {
  @observable accessKey = '';
  @observable secretKey = '';
  @observable errInfo;
  @observable loginSta = false;
  @observable buckets = [];

  @action login() {
    if (!!self.accessKey && !!self.secretKey) {
      let fetchAPI = new FetchAPI('buckets', self.accessKey, self.secretKey);
      fetchAPI.get().then(res => {
        self.buckets = res;
        self.loginSta = true;
      }).catch(e => {
        console.error(e);
        self.errInfo = '登录失败，请重新输入！';
      });
    } else {
      self.errInfo = '请输入完整信息！';
    }
  }

  @action setAccessKey(val) {self.accessKey = val; self.errInfo = ''}
  @action setSecretKey(val) {self.secretKey = val; self.errInfo = ''}
}

const self = new LoginMobx();
export default self;