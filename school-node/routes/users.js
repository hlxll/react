var express = require("express");
var router = express.Router();

//登录
router.get("/login", function (req, res, next) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      var whereStr = data; // 查询条件
      //find是查询条件，limit是返回条数
      dbo
        .collection("user")
        .find(whereStr)
        .limit(1)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          if (result[0]) {
            let rule = {
              id: result[0]._id,
              telephone: result[0].telephone,
              password: result[0].password,
            };
            jwt.sign(rule, "Bearer", { expiresIn: 3600 }, function (
              err,
              token
            ) {
              if (err) throw err;
              res.json({
                status: 0,
                token: token,
                name: whereStr.telephone,
              });
            });
          } else {
            res.json({
              status: 1,
              message: "账号名或密码错误",
            });
          }
        });
    }
  );
});
//注册
router.get('/register', function (req, res) {
  var data = req.query;
  console.log(data)
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var myobj = data;
    dbo.collection("user").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("文档插入成功");
      db.close();
    });
  });
  res.send('成功注册');
})
//查看订单
router.get('/queryOrder', function (req, res) {
  var data = req.query;
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017';
  MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = data;  // 查询条件
    //find是查询条件，limit是返回条数
    dbo.collection("orderList").find(whereStr).limit(10).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      console.log(result)
      res.send(result)
    });
  })
})
//添加订单
router.get('/addOrder', function (req, res) {
  var data = req.query;
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var duplicate = {
      type: "1",
      time: "2020-03-05",
      money: "216",
      name: "西湖一日游"
    }
    dbo.collection("orderList").find(duplicate).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      res.send('添加成功')
    });
  })

})
module.exports = router;
