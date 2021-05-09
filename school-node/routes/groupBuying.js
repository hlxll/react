var expiress = require('express')
var router = expiress.Router()
//查询列表数据
router.get('/searchTicket', function (req, res) {
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
        .collection("groupBuying")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.send(result);
        });
    }
  );
})
//购买团购项目
router.get("/buyGroup", function (req, res) {
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
        .collection("groupBuying")
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

module.exports = router