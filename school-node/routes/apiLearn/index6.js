var express = require('express');
var route = express();


//提供了异步的网络API，创建了基于流的TCP或IPC的服务器和客户端
//TCP/ip是可以在不同进程，或者不同机器的不同进程间通信
//IPC进程间通信，不能跨物理机器，只能在同一台机器的不同进程间通信
// 在同一台机器上的两个进程间进行通信两者都可以使用，但是IPC效率会高于TCP/IP，
// 原因：前者是直接把通讯包给另一个进程，后者是先把通讯包给本地环路接口，再从接口给另一个进程
//Net模块主要是两个类，Server和Socket。
//server服务器，socket可以由用户创建与服务器交互


// ?? net和http的区别，net通信常用于干什么
var net = require('net')

route.get('/net', (req, res) => {
    res.send('返回net请求')
})


