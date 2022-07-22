var express = require('express')
var route = express.Router()
var path = require('path')
route.get('/', (req, res) => {

    //extname返回后缀
    console.log(path.extname('./huang.name'));
    //整合路径字符串
    path.format({
        root: '/ignored',
        dir: '/home/user/dir',
        base: 'file.txt'
    });
    // Returns: '/home/user/dir/file.txt'

    path.isAbsolute('/foo/bar'); // 判断是不是决定路径
    path.isAbsolute('//server');    // window路径

    path.normalize('/foo/bar//baz/asdf/quux/..');
    // Returns: '/foo/bar/baz/asdf',解析..和.

    console.log(path.parse('C:\\path\\dir\\file.txt'));
    // Returns:
    // { root: 'C:\\',
    //   dir: 'C:\\path\\dir',
    //   base: 'file.txt',
    //   ext: '.txt',
    //   name: 'file' }

    res.send('学习path')
})

module.exports = route;