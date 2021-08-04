var express = require("express");
var router = express.Router();
var ObjectId = require("mongodb").ObjectId;
router.get("/searchPlane", function (req, res, next) {
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
        .collection("planeTicket")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();

          if (!data.date || data.date == "undefined") {
            res.json({
              data: result,
              status: 200,
            });
          } else {
            let resArr = [];
            result.map((item) => {
              if (data.date == item.date[0]) {
                resArr.push(item);
              }
            });
            res.json({
              data: resArr,
              status: 200,
            });
          }
        });
    }
  );
});
router.get("/deletePlane", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { _id: ObjectId(data.id) }; // 查询条件
    dbo.collection("planeTicket").deleteOne(whereStr, function (err, obj) {
      if (err) throw err;
      db.close();
      res.json({
        message: "删除成功",
        status: 200,
      });
    });
  });
});
router.get("/addPlane", function (req, res) {
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
      whereStr.date = whereStr.date.split(",");
      dbo.collection("planeTicket").insertOne(whereStr, function (err, res) {
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
