import axios from 'axios';
import API, { reqURLObj } from './api';

export default class FetchAPI {
  constructor(urlKey, accessKey, secretKey) {
    if (!urlKey) throw new Error('error! no urlKey val');

    if (accessKey && secretKey &&
      typeof accessKey === 'string' && 
      typeof secretKey === 'string') {
      let api = new API(accessKey, secretKey);
      this.authorization = api.generateAccessToken(urlKey);
    }

    this.urlKey = urlKey;
  }

  async get() {
    let url = reqURLObj[this.urlKey];
    if (!url) return Promise.reject(new Error('url key not exit'));

    const options = {
      method: 'get',
      url: url,
    };
    options.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.authorization,
    }
    return await axios(options).then(res => {
      if (res.data.error) {
        localStorage.removeItem(`mac`);
        return Promise.reject(res.data.error);
      }

      return Promise.resolve(res.data);
    }).catch(e => {
      localStorage.removeItem(`mac`); 
      return Promise.reject(e);
    });
  }

  post() {
    
  }
}