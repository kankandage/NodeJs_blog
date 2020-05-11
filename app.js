/*
 * @Description: 应用程序启动(入口)文件
 * @Author: kankandage
 * @Date: 2020-05-09 21:39:20
 * @LastEditTime: 2020-05-11 00:44:47
 * @LastEditors: kankan
 */

 //加载express模块
 var express = require('express');
 //加载模板处理模块
 var swig = require('swig');
 //加载数据库模块
 var mongoose = require('mongoose');
 //加载body-parser,用来处理post提交过来的数据
 var bodyparse = require('body-parser');
 //加载cookeis模块
 var Cookies = require('cookies');

 //创建app请求 =>NodeJS Http.createServer();
 var app = express();

 var User = require('./models/user');
 
 /**
  * 设置静态文件托管
  * 当用户访问url以/public开始，那么直接返回对应__dirname + '/public'下的文件
  */
app.use('/public',express.static(__dirname + '/public'));

 /**
  * 配置应用模板
  */
 //定义当前应用所使用的模板引擎
 //'html'  表示模板引擎的名称
 //swig.renderFile 用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
 //设置模板文件存放的目录，第一个参数必须是views,第二个文件是目录
app.set('views','./views')
 //注册模板引擎，第一个参数必须是view engine,第二个参数和app.engine这个方法中定义的模板引擎的名称一致
app.set('view engine','html');
//开发过程取消模板缓存
swig.setDefaults({cache:false});
//bodyparse设置
app.use(bodyparse.urlencoded({extend:true}));
//cookies 
//use()??????
app.use(function(req,res,next){
  req.cookies = new Cookies(req,res);

  //解析登录用户的cookies信息
  req.userInfo = {};
  if(req.cookies.get('userInfo')){
    try{
        req.userInfo = JSON.parse(req.cookies.get('userInfo'));

        //获取当前用户是否为管理员
        User.findById(req.userInfo._id).then(function(userInfo){
          req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
          next();
        });
    }catch(e){
        next();
    }
  }else{
    next();
  }
});


/**
 * 根据不同模块进行开发
 */
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/',require('./routers/main'));
 
//连接数据库
mongoose.connect('mongodb://localhost:27019/blog2',function(err){
  if(err){
    console.log('数据库连接失败');
  }else{
    console.log('数据库连接成功');
    //监听http端口
    app.listen(8081);
  }
});

/**
 * cd C:\Program Files\MongoDB\Server\4.2\bin
 * 开启数据库 mongod --dbpath=D:\nodeJs_Proj\db --port=27019
 */



