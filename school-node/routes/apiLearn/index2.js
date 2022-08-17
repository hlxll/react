var express = require('express');
var QRCode = require('qrcode')
route = express.Router();

var mongo = require('mongodb').MongoClient;

route.get('/', function (req, res) {
    res.render('index.html', {
        title: '首页',
    });
})
route.get('/qrCode', function (req, res) {
    QRCode.toDataURL('huanglin', (err, url) => {
        res.send(url)
    })
})

module.exports = route