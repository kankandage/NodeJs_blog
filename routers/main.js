/*
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-09 23:00:38
 * @LastEditTime: 2020-05-11 00:42:04
 * @LastEditors: kankan
 */

var express = require('express');

var router = express.Router();
router.get('/',function(req,res,next){  
    console.log(req.userInfo);

    res.render('main/index',{
        userInfo:req.userInfo
    });
});
module.exports = router;
