var WeiXin = require('./controllers/weixin');
var Biu = require('./controllers/biu');

var r = require('express').Router();

r.all(
  '/wxgate',
  WeiXin.gate
);

r.get(
  '/',
  Biu.player
);

r.get(
  '/biu',
  Biu.biu
);

r.all('/*', function (req, res) {
  var err = {
    error: '未知的HTTP请求',
    method: req.method,
    action: req.params[0],
    query: req.query,
    headers: req.headers,
    body: req.body
  };

  var msg = JSON.stringify(err, null, 2);
  console.log(msg);
  res.status(404).send(msg);
})

module.exports = r;
