var express = require("express");
var router = express.Router();
// :登录注册模块，2：机票模块，3:酒店模块，4：火车票模块5:度假模块，6:门票模块，7:当地人模块
// 8:攻略模块，9:订单模块，10:客服模块，11:后台管理模块
/* GET home page. */
// var MongoDB = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017'
router.get("/", function (req, res, next) {
  res.send("asd");
});

module.exports = router;
