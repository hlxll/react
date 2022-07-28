var fs = require("fs");

var path = require("path");
var express = require("express");
route = express.Router();

/**
 * __dirname是为了获取地址的全路径，下方用str拼接的，和这个一样
 * lstat,stat,fstat可以得到Stats对象，该对象是文件一些信息方法
 * flags：操作模式，如w，r+等，w覆盖写入，r+后续添加写入
 * */
route.get("/", function (req, res) {
  let str = path.join(__dirname, "../../routes");
  let learnText = path.join(__dirname, "./learn.txt");
  function readRoute(str) {
    fs.readdir(str, "utf-8", function (err, data) {
      data.forEach((item) => {
        let newStr = str + "/" + item.toString();
        fs.lstat(newStr, (err, stats) => {
          if (stats.isFile()) {
            console.log(item);
          } else {
            fs.ReadStream(str, () => {});
            readRoute(str + "/" + item.toString());
          }
        });
      });
    });
  }
  //   readRoute(str);
  function access() {
    //access是检查文件是否可被调用进程不同操作的权限，只返回err，第二个参数使用constants.F_OK，可以检查文件是否存在
    //不推荐在打开，写入，读取之前检查文件，操作是异步的，可能会有问题
    fs.access(str, fs.constants.R_OK, (err) => {
      console.log(err);
    });
  }
  function appendFile() {
    let str = path.join(__dirname, "./learn.txt");
    fs.appendFile(
      str,
      "黄林1",
      {
        encoding: "utf-8",
      },
      (err) => {
        console.log(err);
      }
    );
  }
  function changeChmod() {
    //改变文件权限
    let str = path.join(__dirname, "./learn.txt");
    fs.chmod(str, 0o400, (err) => {
      console.log(err);
    });
  }
  function chmon() {
    //改变文件所有者
    fs.chown(learnText, root, root, (err) => {
      console.log(err);
    });
  }
  //constants，用于一些类的参数，是文件系统数据
  function copyFile() {
    let str = path.join(__dirname, "./copyFile.txt");
    fs.copyFile(learnText, str, (err) => {
      console.log(err);
    });
  }

  /**
   * 大文件读取时，先读一部分处理完继续读取，使用读取流
   *highWaterMark，定义每次读取的内容大小,
   on事件有（open打开时运行，close关闭时运行，error错误时运行，data获取到一次数据运行，end所有数据读取完运行，pause暂停，resume继续）
  */
  function streamRead() {
    let str = path.join(__dirname, "./copyFile.txt");
    let fd = fs.createReadStream(str, {
      encoding: "utf-8",
      highWaterMark: 5,
      //   start: 0,
      //   end: 5,
      autoClose: true,
    });
    // fd.on("open", () => {
    //   console.log("文件打开");
    // });
    let amount = 0;
    fd.on("data", (data) => {
      console.log(data);
      if (amount == 1) {
        fd.pause();
      }
      amount++;
    });
    fd.on("pause", () => {
      console.log("停止");
      fd.resume();
    });
    fd.on("close", () => {
      console.log("关闭");
    });
  }
  function writeStream() {
    //option默认参数
    // const defaults = {
    //     flags: 'w',
    //     encoding: 'utf8',
    //     fd: null,
    //     mode: 0o666,
    //     autoClose: true
    //   };
    //也可以有start，写入从指定位置开始，flags需要设置r+
    let str = path.resolve(__dirname, "./copyFile.txt");
    let ws = fs.createWriteStream(str, {
      highWaterMark: 3,
    });
    let i = 0;
    function writeText() {
      let flag = true;

      while (i < 10 && flag) {
        flag = ws.write("c");
        i++;
      }
      console.log(flag);
    }
    ws.on("drain", () => {
      writeText();
    });
    writeText();
  }
  res.send("123");
});
module.exports = route;
