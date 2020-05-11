/*
 * @Description:处理后台管理的路由
 * @Author: kankandage
 * @Date: 2020-05-09 22:59:21
 * @LastEditTime: 2020-05-11 01:40:37
 * @LastEditors: kankan
 */

 var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.use(function(req,res,next){
    if(!req.userInfo.isAdmin){
        //非管理员
        res.send('非管理员');
    }
    next();
})

/**
 * 首页
 */

router.get('/',function(req,res,next){
    res.render('admin/index',{
        userInfo:req.userInfo
    });
});

/**
 * 用户管理
 */
router.get('/user',function(req,res,next){
    //从数据库中读取所有用户数据
    User.find().then(function(users){
        //console.log(users);
        res.render('admin/user_index',{
            userInfo:req.userInfo,
            users:users
        });
    });
})

//?????将路由返回
module.exports = router;
