/*
 * @Description: 模型类
 * @Author: kankandage
 * @Date: 2020-05-10 01:25:23
 * @LastEditTime: 2020-05-10 01:27:47
 * @LastEditors: kankan
 */

var mongoose = require('mongoose');

var usersSchema = require('../schemas/users');

module.exports = mongoose.model('User',usersSchema);
