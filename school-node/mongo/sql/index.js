var fs = require('fs')
var path = require('path')

let url = path.join(__dirname, '../sql')
function readSql(url) {
    fs.readdir(url, 'utf-8', (err, res) => {
        res.forEach(item => {
            fs.lstat(url + '/' + item.toString(), (err, stats) => {
                if (stats.isDirectory()) {
                    readSql(url + '/' + item.toString())
                }
            })
            if (item.split('.').pop() == 'sql') {
                fs.readFile(url + '/' + item, 'utf-8', (err, file) => {
                    console.log(file)
                })
            }


        })
    })
}
readSql(url)
