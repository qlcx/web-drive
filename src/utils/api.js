import qiniu from 'qiniu';

export const reqURLObj = {
  'buckets': 'https://rs.qbox.me/buckets',
};

export default class API {
  constructor(accessKey, secretKey) {
    // 鉴权对象
    this.mac = localStorage.getItem('mac');
    if (typeof accessKey === 'string' && typeof secretKey === 'string') {
      this.mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
      localStorage.setItem('mac', this.mac);
    } else {
      throw new Error('new API error');
    }
  }

  // 生成accessToken
  generateAccessToken(urlKey, body) {
    const url = reqURLObj[urlKey];
    if (!url) return;

    return qiniu.util.generateAccessToken(this.mac, url, body);
  }
}