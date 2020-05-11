/*
 * @Description: 数据表结构
 * @Author: kankandage
 * @Date: 2020-05-09 23:37:36
 * @LastEditTime: 2020-05-11 00:30:51
 * @LastEditors: kankan
 */

 var mongoose = require('mongoose');
 
//用户的表结构
module.exports = new mongoose.Schema({
    //用户名
    username:String,
    //密码
    password:String,
    //是否是管理员
    isAdmin:{
        type:Boolean,
        default:false
    }
});