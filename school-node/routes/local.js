var expiress = require("express");
var sort = require("./sort");
var router = expiress.Router();
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
      //find是查询条件，limit是返回条数
      dbo
        .collection("local")
        .find(data)
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
module.exports = router;
