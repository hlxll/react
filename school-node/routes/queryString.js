var express = require("express");
var router = express.Router();

var requireString = require("querystring");

router.get("/queryStr", function (req, res, next) {
  var str = requireString.decode("{'name': 'value'}");
  console.log(str);
});

module.exports = router;
