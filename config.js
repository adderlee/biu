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
    1: {type: 'picture', file: '1.jpg'},
    2: {type: 'picture', file: '2.jpg'},
    3: {type: 'picture', file: '3.jpg'},
    4: {type: 'picture', file: '4.jpg'},
    5: {type: 'picture', file: '5.jpg'},
    6: {type: 'picture', file: '6.jpg'},
    7: {type: 'picture', file: '7.jpg'},
    8: {type: 'picture', file: '8.jpg'},
    82: {type: 'movie', file: '82.mp4'},
    9: {type: 'picture', file: '9.jpg'},
    92: {type: 'picture', file: '92.jpg'},
    10: {type: 'picture', file: '10.jpg'},
    102: {type: 'movie', file: '102.mp4'},
    11: {type: 'picture', file: '11.jpg'},
    12: {type: 'picture', file: '12.jpg'},
    13: {type: 'picture', file: '13.jpg'},
    14: {type: 'picture', file: '14.jpg'},
    142: {type: 'picture', file: '142.jpg'},
    15: {type: 'picture', file: '15.jpg'},
    16: {type: 'picture', file: '16.jpg'},
    17: {type: 'picture', file: '17.jpg'},
    18: {type: 'picture', file: '18.jpg'},
    19: {type: 'picture', file: '19.jpg'},
    20: {type: 'picture', file: '20.jpg'},
    21: {type: 'picture', file: '21.jpg'},
    22: {type: 'picture', file: '22.jpg'},
    23: {type: 'movie', file: '23.mp4'},
    241: {type: 'picture', file: '241.jpg'},
    242: {type: 'picture', file: '242.jpg'},
    243: {type: 'picture', file: '243.jpg'},
    25: {type: 'movie', file: '25.mp4'},
    26: {type: 'picture', file: '26.jpg'},
    27: {type: 'picture', file: '27.jpg'},
    29: {type: 'picture', file: '29.jpg'},
    999: {type: 'picture', file: 'bg.jpg'},
  }
};

module.exports = config;
