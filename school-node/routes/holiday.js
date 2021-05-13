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
          whereStr[obj] = obj == "money" ? +data[obj] : data[obj];
        }
      } // 查询条件
      //find是查询条件，limit是返回条数
      dbo
        .collection("holiday")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          res.send(result);
        });
    }
  );
});
router.get("/deleteHoliday", function (req, res) {
  var data = req.query;
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var whereStr = { _id: ObjectId(data.id) }; // 查询条件
    dbo.collection("holiday").deleteOne(whereStr, function (err, obj) {
      if (err) throw err;
      db.close();
      res.json({
        message: "删除成功",
        status: 200,
      });
    });
  });
});
router.get("/addHoliday", function (req, res) {
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
      dbo.collection("holiday").insertOne(whereStr, function (err, res) {
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
