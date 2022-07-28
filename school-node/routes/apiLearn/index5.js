var os = require('os')
var express = require('express')
var route = express()

route.get('/', (req, res) => {
    let obj = {
        eol: os.EOL,
        arch: '编译 Node.js 二进制文件的操作系统 CPU 架构' + os.arch(),
        contants: '用于错误码、进程信号等的常用操作系统特定常量' + JSON.stringify(os.constants),
        //cpu信息的nice值，只适用于POXIS，window始终为0
        cpus: '在不同模式下的cpu使用情况' + JSON.stringify(os.cpus()),
        endia: '标识为其编译node二进制文件的CPU的字节序的字符串' + os.endianness(),
        free: '返回空闲的内存量,以字节为单位' + os.freemem(),
        totalMen: '以整数形式返回系统内存总量,以字节为单位' + os.totalmem(),
        // Priority: '返回指定进程的优先级'+os.getPriority()
        //setPriority: '设置进程优先级'+os.setPriority(pid||0, priority)
        homeDir: '返回当前用户的主目录的字符串路径' + os.homedir(),
        //临时文件是系统操作的一些足迹，对最终结果的展示起作用
        tmpDir: '返回操作系统默认的临时文件的目录' + os.tmpdir(),
        hostname: '返回操作系统的主机名' + os.hostname(),
        un3: '返回uname3操作系统名称' + os.type(),
        //window系统始终为0，unix才有用
        loadavg: '平均负载，是系统用来评估执行了多少工作量，每一个运行中的进程都会使负载加1，' + os.loadavg(),
        network: '返回已经分配使用网络地址的网络接口的对象' + JSON.stringify(os.networkInterfaces()),
        plat: '返回标识操作系统平台的字符串' + os.platform(),
        release: '返回操作系统' + os.release(),
        uptime: '以秒为单位返回系统正常运行时间' + os.uptime(),
        userInfo: '返回用户有效信息' + JSON.stringify(os.userInfo({ encoding: 'utf8' })),
        // version: '内核版本' + os.version()
    }
    res.send(obj)
})


module.exports = route