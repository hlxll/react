var express = require('express');
var router = express.Router();

/* GET home page. */
// var MongoDB = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017'
router.get('/', function(req, res, next) {
  res.send({login: true});
});

module.exports = router;
