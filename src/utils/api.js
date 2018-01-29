import qiniu from 'qiniu';

const reqURLObj = {
  'buckets': 'https://rs.qbox.me/buckets',
};

class API {
  constructor(_accessKey, _secretKey) {
    let accessKey = _accessKey ? _accessKey : localStorage.getItem('accessKey');
    let secretKey = _secretKey ? _secretKey : localStorage.getItem('secretKey');

    if (typeof accessKey === 'string' && typeof secretKey === 'string') {
      // 鉴权对象    
      this.mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    }
  }

  // 获取accessToken
  getAccessToken(urlKey, body) {
    let url = reqURLObj[urlKey];
    if (!url) {
      return;
    }
    return qiniu.util.generateAccessToken(this.mac, url, body);
  }
}