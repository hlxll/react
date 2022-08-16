var express = require("express");
route = express.Router();

var mongo = require("mongodb").MongoClient;

route.get("/login", function (req, res) {
  res.render("index.html", {
    title: "首页",
  });
});

module.exports = route;
