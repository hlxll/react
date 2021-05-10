var express = require("express");
var router = express.Router();
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
          res.json({
            data: result,
            status: 200,
          });
        });
    }
  );
});
module.exports = router;
