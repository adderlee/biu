var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var flash = require('connect-flash');

// 引用swig模板引擎
var swig = require('swig');

// 将POST请求中的数据转换成JSON对象（ExpressJs模块）
var bodyParser = require('body-parser');

// 自动压缩响应数据（ExpressJs模块）
var compress = require('compression');

// 会话管理器（ExpressJs模块）
var session = require('express-session');

console.log("加载网站设置...");
var config = require('./config');

//console.log("加载Mongoose模型...");
//require('./models');

console.log("加载HTTP路由...");
var router = require('./router');

console.log("加载身份验证中间件...");
var auth = require('./middlewares/auth');

var app = express();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('view cache', false);

swig.setDefaults({ cache: false });

app.use(bodyParser.urlencoded({
  type: function(req) {
    return /x-www-form-urlencoded/.test(req.headers['content-type']);
  },
  extended: false
}));
app.use(bodyParser.json());

console.log("加载Cookie处理及签名中间件...");
app.use(require('cookie-parser')(config.session_secret));
app.use(flash());
app.use(compress());

app.use(session({
  secret: config.session_secret,
//  cookie: { secure: true },
  resave: true,
  saveUninitialized: true
}));

//app.use(auth.authUser);
//app.use(auth.blockUser());

// 保存设置信息到应用程序本地变量中
app.locals.config = config;

console.log("设置静态资源路径...");
var assets = path.join(__dirname, 'assets');
app.use('/assets', express.static(assets));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/ccl', express.static(path.join(__dirname, 'node_modules/comment-core-library/build')));
app.use(favicon(assets + "/images/logo.ico"));

var images = path.join(__dirname, 'images');
app.use('/images', express.static(images));


var files = path.join(__dirname, 'files');
app.use('/files', express.static(files));

app.use('/', router);

var http = require('http').Server(app);

var io = require('socket.io')(http);
io.on('connection', function(socket){
    console.log('a user connected');
});

config.io = io;

var server = http.listen(10801, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('“BIU” 运行于 http://%s:%s', host, port);
});
