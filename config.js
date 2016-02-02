var path = require('path');

var site = 'http://him.hishop.com.cn:10800';

var config = {
  debug: false,
  name: 'wxm',
  description: 'Hishop HiPOS Open Platform',
  keywords: 'HiShop, POS, Open',
  db: {
    user: 'wx_user',
    password: 'T32m42HC32yW876P467y',
    server: 'www.weiyintianxia.com',
    database: 'WxData',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    }
  },
  session_secret: 'WXM1BED8199',
  auth_cookie_name: 'wxm',
  prgUrlBase: 'http://localhost:10801/assets/prg/',
  prgs: {
    0: {type: 'movie', file: '0.mp4'},
    1: {type: 'movie', file: 'big.mp4'},
    26: {type: 'picture', file: '26.jpg'},
    999: {type: 'picture', file: 'bg.jpg'},
  }
};

module.exports = config;
