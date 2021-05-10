var expiress = require("express");
var router = expiress.Router();
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
      console.log(whereStr);

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
module.exports = router;
