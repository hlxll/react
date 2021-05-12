var expiress = require("express");
var router = expiress.Router();
var ObjectId = require("mongodb").ObjectId;
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
      dbo
        .collection("hotel")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.send(result);
        });
    }
  );
});
router.get("/buyHotel", function (req, res) {
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
        .collection("hotel")
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
router.get("/deleteHotel", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { _id: ObjectId(data.id) }; // 查询条件
    dbo.collection("hotel").deleteOne(whereStr, function (err, obj) {
      if (err) throw err;
      db.close();
      res.json({
        message: "删除成功",
        status: 200,
      });
    });
  });
});
router.get("/addHotel", function (req, res) {
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
      whereStr.latlon = whereStr.latlon.split(",");
      whereStr.arrType = [];
      dbo.collection("hotel").insertOne(whereStr, function (err, res) {
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
router.get("/addHotelHome", function (req, res) {
  var data = req.query;

  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";
  MongoClient.connect(
    url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db("admin");
      let whereStr = {
        _id: ObjectId(data.id),
      };
      //find是查询条件，limit是返回条数
      dbo
        .collection("hotel")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          var arrTypeData = [];
          if (result[0] && result[0].arrType) {
            arrTypeData = result[0].arrType;
          }
          MongoClient.connect(url, { useNewUrlParser: true }, function (
            err,
            db
          ) {
            if (err) throw err;
            var dbo = db.db("admin");
            let whereStr = {
              _id: ObjectId(data.id),
            };
            let updateData = {
              homeType: data.homeType,
              bedType: data.bedType,
              breakfast: data.breakfast,
              number: data.number,
              money: data.money,
            };
            arrTypeData.push(updateData);
            var updateStr = { $set: { arrType: arrTypeData } }; //修改数据
            dbo
              .collection("hotel")
              .updateOne(whereStr, updateStr, function (err, res) {
                if (err) throw err;
                db.close();
              });
          });
        });
    }
  );
  res.json({
    status: 200,
    message: "添加成功",
  });
});
module.exports = router;
