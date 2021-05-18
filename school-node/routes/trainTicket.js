var express = require("express");
var router = express.Router();
var ObjectId = require("mongodb").ObjectId;
//火车票列表http://localhost:3000/trainTicket/searchTicket
router.get("/searchTicket", function (req, res) {
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
      //find是查询条件，limit是返回条数
      console.log(whereStr);

      dbo
        .collection("trainTickets")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.json({
            data: result,
            message: "查询成功",
          });
        });
    }
  );
});
//购买火车票http://localhost:3000/trainTicket/buyTicket?name=K2288&type=1
router.get("/buyTicket", function (req, res) {
  var data = req.query;
  console.log(data);

  var trainType = data.trainType; //火车票种类
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
        .collection("trainTickets")
        .find(whereStr)
        .limit(1)
        .toArray(function (err, result) {
          if (err) throw err;
          var ticketNumber = result[0].num;
          let lastNum = result[0].num[trainType];
          if (lastNum > 0) {
            money = result[0].money[trainType];
            //添加订单记录
            MongoClient.connect(
              url,
              { useUnifiedTopology: true, useNewUrlParser: true },
              function (err, db) {
                if (err) throw err;
                var dbo = db.db("admin");
                var duplicate = {
                  type: 3,
                  time: data.time,
                  money: money,
                  name: data.name,
                  trainType: +trainType,
                  user: data.user,
                  username: data.username,
                };
                dbo
                  .collection("orderList")
                  .insertOne(duplicate, function (err, res) {
                    if (err) throw err;
                    ticketNumber[trainType] = ticketNumber[trainType] - 1;
                    //修改火车票数量
                    MongoClient.connect(
                      url,
                      { useNewUrlParser: true },
                      function (err, db) {
                        if (err) throw err;
                        var dbo = db.db("admin");
                        var whereStr = { name: data.name }; // 查询条件
                        var updateStr = { $set: { num: ticketNumber } }; //修改数据
                        dbo
                          .collection("trainTickets")
                          .updateOne(whereStr, updateStr, function (err, res) {
                            if (err) throw err;
                            db.close();
                          });
                      }
                    );
                    db.close();
                  });
              }
            );
            res.json({
              status: 1,
              message: "购买成功",
            });
          } else {
            res.json({
              status: 0,
              message: "数量不足",
            });
          }
        });
    }
  );
});
router.get("/deleteTrain", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { _id: ObjectId(data.id) }; // 查询条件
    dbo.collection("trainTickets").deleteOne(whereStr, function (err, obj) {
      if (err) throw err;
      db.close();
      res.json({
        message: "删除成功",
        status: 200,
      });
    });
  });
});
router.get("/addTrain", function (req, res) {
  var data = req.query;
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
      whereStr.money = whereStr.money.split(",");
      whereStr.num = whereStr.num.split(",");
      dbo.collection("trainTickets").insertOne(whereStr, function (err, res) {
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
