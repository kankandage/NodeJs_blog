/*
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-11 18:20:50
 * @LastEditTime: 2020-05-11 18:24:53
 * @LastEditors: kankan
 */
var mongoose = require('mongoose');

var categoriesSchema = require('../schemas/categories');

module.exports = mongoose.model('Category',categoriesSchema);