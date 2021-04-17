var express = require("express");
var router = express.Router();

//登录http://localhost:3000/user/login?username=huanglin&password=123123
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
              username: result[0].username,
              password: result[0].password,
            };
            // jwt.sign(rule, "Bearer", { expiresIn: 3600 }, function (
            //   err,
            //   token
            // ) {
            //   if (err) throw err;
            //   res.json({
            //     status: 0,
            //     token: token,
            //     name: whereStr.telephone,
            //   });
            // });
            res.json({
              status: 2,
              message: "登录成功",
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
//注册http://localhost:3000/user/register?username=huanglin&password=123123
router.get("/register", function (req, res) {
  var data = req.query;
  console.log(data);
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var myobj = {
      username: data.username,
      password: data.password,
      jurisdiction: "admin",
    };
    dbo.collection("user").insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("文档插入成功");
      db.close();
    });
  });
  res.send("成功注册");
});
//查看订单http://localhost:3000/user/queryOrder
router.get("/queryOrder", function (req, res) {
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
        .collection("orderList")
        .find(whereStr)
        // .limit(10)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          console.log(result);
          res.send(result);
        });
    }
  );
});
//添加订单http://localhost:3000/user/addOrder?type=1&time=2021-05-05&money=100&name=%E5%8D%97%E6%98%8C
router.get("/addOrder", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      var duplicate = {
        type: data.type,
        time: data.time,
        money: data.money,
        name: data.name,
      };
      dbo.collection("orderList").insertOne(duplicate, function (err, res) {
        if (err) throw err;
        db.close();
      });
    }
  );
  res.json({
    status: 200,
    message: "添加成功",
  });
});
module.exports = router;
