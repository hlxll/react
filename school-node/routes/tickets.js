var expiress = require("express");
var router = expiress.Router();

//门票列表ttp://localhost:3000/tickets/searchTicket?name=西湖
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
      //find是查询条件，limit是返回条数
      dbo
        .collection("tickets")
        .find(data)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.json({
            status: 1,
            data: result,
            message: "查询成功",
          });
        });
    }
  );
});
//购买门票http://localhost:3000/tickets/buyTicket?name=西湖
router.get("/buyTicket", function (req, res) {
  var data = req.query;
  var type = data.type; //火车票种类
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
        .collection("tickets")
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
                time: "2021-05-01",
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
