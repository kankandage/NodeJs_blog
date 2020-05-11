/*
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-11 21:45:10
 * @LastEditTime: 2020-05-11 21:45:18
 * @LastEditors: kankan
 */

var mongoose = require('mongoose');
var contentsSchema = require('../schemas/contents');

module.exports = mongoose.model('Content', contentsSchema);
