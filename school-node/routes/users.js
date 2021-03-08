var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
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
        .collection("user")
        .find(whereStr)
        .limit(10)
        .toArray(function (err, result) {
          if (err) throw err;
          db.close();
          if (result[0]) {
            let rule = {
              id: result[0]._id,
              telephone: result[0].telephone,
              password: result[0].password,
            };
            jwt.sign(rule, "Bearer", { expiresIn: 3600 }, function (
              err,
              token
            ) {
              if (err) throw err;
              res.json({
                status: 0,
                token: token,
                name: whereStr.telephone,
              });
            });
          } else {
            res.json({
              status: 1,
              message: "账号名或密码错误",
            });
          }
        });
    }
  );
});
module.exports = router;
