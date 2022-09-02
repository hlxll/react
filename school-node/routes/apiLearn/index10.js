var express = require('express')
var axios = require('axios')
var cheerio = require('cheerio')
var fs = require('fs')
var path = require('path')
var route = express()
route.get('/wb_type', function (req, res) {
    let url = req.getDataUrl || 'https://weibo.com/ajax/feed/allGroups?is_new_segment=1&fetch_hot=1'
    axios.get(url).then(result => {
        let url = path.join(__dirname, req.writeUrl)
        fs.open(url, 'r+', function (err, fd) {
            fs.writeFile(fd, data.toString(), function (err, res) {
                if (err) throw err;
            })
        })
    })
    res.json('cehngg ')

})
module.exports = route