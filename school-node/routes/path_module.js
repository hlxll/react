var express = require("express");

var router = express.Router();

var path = require("path");
router.get("/", function (req, res) {
  //在不同系统，baseName是不同的，poxis返回完整地址，windows返回最后一个地址名
  //   如果想在不同系统返回同一种地址，可以加.poxis或.win32
  let resBaseName = path.win32.basename("../../routes/path_module.js");

  let str = "baseName:" + resBaseName;
  res.send(str);
});

module.exports = router;
