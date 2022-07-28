var express = require('express');
route = express.Router();

var mongo = require('mongodb').MongoClient;

route.get('/', function (req, res) {
    res.render('index.html', {
        title: '首页',
    });
})
route.get('/addNew', function (req, res) {
    let mongoPath = 'mongodb://localhost:27017'
    let data = {
        name: 'huanglin'
    }
    mongo.connect(mongoPath, function (err, db) {
        if (err)
            return;
        var newList = db.db('weibo');
        newList.collection('newList').insertOne(data, function (err, log) {
            console.log(log);
        })
    })
    res.send('添加微博')
})

module.exports = route