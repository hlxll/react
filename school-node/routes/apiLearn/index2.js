var express = require('express');
var QRCode = require('qrcode')
var app = express()
var session = require("express-session");
route = express.Router();

var mongo = require("mongodb").MongoClient;

route.get('/', function (req, res) {
    res.render('index.html', {
        title: '首页',
    });
})
route.get('/qrCode', function (req, res) {
    req.session.username = 'huanglin'
    QRCode.toDataURL('huanglin', (err, url) => {
        res.send(url)
    })
})
route.get('/getSession', function (req, res) {
    if (req.session.username) {
        res.send(true)
    } else {
        res.send(false)
    }
})
route.get('/login', function (req, res) {
    res.json({
        msg: req.session.username,
    });
})

module.exports = route;
