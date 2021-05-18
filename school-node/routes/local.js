var expiress = require("express");
var sort = require("./sort");
var router = expiress.Router();
var ObjectId = require("mongodb").ObjectId;

//sort等于int是递减，out是递增
// http://localhost:3000/local/searchLocal?sort='int'
router.get("/searchLocal", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      let whereStr = {};
      for (let obj in data) {
        if (data[obj] != "undefined") {
          whereStr[obj] = data[obj];
        }
      }
      if (whereStr.type) {
        whereStr.type = +whereStr.type;
      }
      //find是查询条件，limit是返回条数
      dbo
        .collection("local")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          if (data.sort && data === "int") {
            res.json({
              status: 1,
              message: "查询成功",
              data: sort(result),
            });
          }
          if (data.sort && data === "out") {
            res.json({
              status: 1,
              message: "查询成功",
              data: outSort(result),
            });
          } else {
            res.json({
              status: 1,
              message: "查询成功",
              data: result,
            });
          }
        });
    }
  );
});
//购买本地服务http://localhost:3000/local/searchLocal?name=''
router.get("/buyTicket", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      var whereStr = {
        name: data.name,
      };
      let money = 0;
      dbo
        .collection("local")
        .find(whereStr)
        .limit(1)
        .toArray(function (err, result) {
          if (err) throw err;
          money = result.money;
          //添加订单记录
          MongoClient.connect(
            url,
            { useUnifiedTopology: true, useNewUrlParser: true },
            function (err, db) {
              if (err) throw err;
              var dbo = db.db("admin");
              var duplicate = {
                type: 1,
                time: new Date(),
                money: money,
                name: result.name,
              };
              dbo
                .collection("orderList")
                .insertOne(duplicate, function (err, res) {
                  if (err) throw err;
                  db.close();
                  res.json({
                    status: 1,
                    message: "购买成功",
                  });
                });
            }
          );
        });
    }
  );
});
router.get("/deleteLocal", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { _id: ObjectId(data.id) }; // 查询条件
    dbo.collection("local").deleteOne(whereStr, function (err, obj) {
      if (err) throw err;
      db.close();
      res.json({
        message: "删除成功",
        status: 200,
      });
    });
  });
});
router.post("/addLocal", function (req, res) {
  var data = req.body;
  console.log(data);

  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      let whereStr = {};
      for (let obj in data) {
        if (data[obj] != "undefined") {
          whereStr[obj] = data[obj];
        }
      }
      dbo.collection("local").insertOne(whereStr, function (err, res) {
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
