var express = require("express");
var router = express.Router();
//登录http://localhost:3000/user/login?username=huanglin&password=123123
router.get("/login", function (req, res, next) {
  var data = req.query;
  console.log(data);
  res.json({
    data: {
      username: '黄林',
      isLogin: true
    },
    status: 200,
  });
  // var MongoClient = require("mongodb").MongoClient;
  // var url = "mongodb://localhost:27017";
  // MongoClient.connect(
  //   url,
  //   { useUnifiedTopology: true, useNewUrlParser: true },
  //   function (err, db) {
  //     if (err) throw err;
  //     var dbo = db.db("admin");
  //     var whereStr = {
  //       username: data.username,
  //       password: +data.password,
  //     }; // 查询条件
  //     //find是查询条件，limit是返回条数
  //     dbo
  //       .collection("user")
  //       .find(whereStr)
  //       .toArray(function (err, result) {
  //         if (err) throw err;
  //         db.close();
  //         console.log(result);
  //         res.json({
  //           data: result,
  //           status: 200,
  //         });
  //       });
  //   }
  // );
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
//上传图片http://localhost:3000/user/upload?username=huanglin&file=base64
router.post("/upload", function (req, res) {
  var data = req.body;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { username: data.username }; // 查询条件
    var updateStr = { $set: { headImg: data.file } }; //修改数据
    dbo.collection("user").updateOne(whereStr, updateStr, function (err, res) {
      if (err) throw err;
      db.close();
    });
  });
  res.json({
    status: 200,
    message: "上传成功",
  });
});
module.exports = router;
