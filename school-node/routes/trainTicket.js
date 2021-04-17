var express = require("express");
var router = express.Router();

//火车票列表http://localhost:3000/trainTicket/searchTicket
router.get("/searchTicket", function (req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      //find是查询条件，limit是返回条数
      dbo.collection("trainTicket").toArray(function (err, result) {
        if (err) throw err;
        db.close();
        res.send(result);
      });
    }
  );
});
//购买火车票http://localhost:3000/trainTicket/buyTicket?name=K2288&type=1
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
        .collection("trainTicket")
        .find(whereStr)
        .limit(1)
        .toArray(function (err, result) {
          if (err) throw err;
          console.log(result[0].num[type]);
          var ticketNumber = result[0].num;
          let lastNum = result[0].num[type];
          if (lastNum > 0) {
            money = result[0].money[type];
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
                  name: data.name,
                };
                dbo
                  .collection("orderList")
                  .insertOne(duplicate, function (err, res) {
                    if (err) throw err;
                    ticketNumber[type] = ticketNumber[type] - 1;
                    console.log(ticketNumber);
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
                          .collection("trainTicket")
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
              message: "success",
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
module.exports = router;
