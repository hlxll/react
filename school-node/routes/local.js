var expiress = require('express')
var { sort } = require('./sort')
var router = expiress.Router()
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
        .collection("local")
        .find(whereStr)
        .toArray(function (err, result) {
          if (err) throw err;
          let data = result
          db.close();
          if (whereStr.sort && whereStr == 'top') {
            result = sort(data)
          }
          if (whereStr.sort && whereStr == 'top') {
            res.send(result)
          } else {
            result.reverse()
            res.send(result)
          }
        });
    }
  );
})