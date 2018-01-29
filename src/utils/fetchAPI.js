import axios from 'axios';
import { reqURLObj } from './api';

class FetchAPI {
  get(urlKey, authorization) {
    let url = reqURLObj[urlKey];
    if (!url) return new Error('url key not exit');

    return reoncaxios.get(reqURLObj[url], Headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': authorization,
    }).then(res => {

    }).catch(e => {
      
    })
  }

  post() {
    
  }
}