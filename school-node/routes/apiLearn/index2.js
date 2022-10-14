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
    if (req.session.loginSession) {
        req.session.loginSession.push({ user: 'huanglin', pwd: '123456' })
    } else {
        req.session.loginSession = []
        req.session.loginSession.push({ user: 'huanglin', pwd: '123456' })
    }
    QRCode.toDataURL('huanglin', (err, url) => {
        res.send(url)
    })
})
route.get('/getLoginType', function (req, res) {
    if (req.session.loginType == 'OK') {
        res.status(200)
        res.send('登录成功')
    } else {
        res.status(500)
        res.send('登录失败')
    }
})
route.get('/getSession', function (req, res) {
    if (req.session.loginSession) {
        res.send(req.session.loginSession)
    } else {
        res.send(false)
    }
})
//手机扫码接口，让二维码对应的session变成登录成功状态
route.get('/login', function (req, res) {
    req.session.loginType = 'OK'
    res.send('登录成功')
})

module.exports = route;
