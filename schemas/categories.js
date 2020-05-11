/*
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-11 18:19:20
 * @LastEditTime: 2020-05-11 18:20:30
 * @LastEditors: kankan
 */
var mongoose = require('mongoose');
 
//分类表结构
module.exports = new mongoose.Schema({
    //分类名
    name:String,
});