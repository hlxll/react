var fs = require("fs");

var path = require("path");
var express = require("express");
const { ReadStream } = require("tty");
const { dirname } = require("path");
const { createGzip } = require("zlib");
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
            fs.ReadStream(str, () => { });
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
    // fs.chmod(str, 0o400, (err) => {
    //   console.log(err);
    // });
  }
  function chmon() {
    //改变文件所有者
    fs.chown(learnText, 0, 0, (err) => {
      console.log(err);
    });
    // fs.lchownSync(learnText, 0, 0)
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
   可读流是对被消费的数据的来源的抽象
  */


  function streamRead() {
    let str = path.join(__dirname, "./copyFile.txt");
    let fd = fs.createReadStream(str, {
      // encoding: "utf-8",
      highWaterMark: 5,
      //   start: 0,
      //   end: 5,
      autoClose: true,
    });
    fd.setEncoding('utf8')

    // fd.on("open", () => {
    //   console.log("文件打开");
    // });
    let amount = 0;
    let writeUrl = path.join(__dirname, './writeFile.txt')
    fd.on("data", (data) => {
      fs.writeFileSync(writeUrl, data, {
        flag: 'a'
      })

      if (amount == 1) {
        //停止
        fd.pause();
      }
      amount++;
    });
    //有新的数据可读，或者到达末尾，就会触发readable事件，前一种情况使用this.read()读取数据，后一种返回null
    fd.on('readable', function () {
      console.log(this.read());
    })
    fd.on("pause", () => {
      console.log("停止");
      fd.resume();
    });
    fd.on("end", () => {
      console.log('没有数据可消费')
    })
    fd.on("close", () => {
      console.log("关闭");
    });

    // pipe将数据推送到可写流中,unpipe分离pipe绑定的writeable流，不传参数是分离全部流
    let pipeTxt = fs.createWriteStream(path.join(__dirname, './pipe.txt'))
    let pipeZip = createGzip()
    fd.pipe(pipeZip).pipe(pipeTxt)
    // fd.unpipe(pipeZip)

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
    let str = path.resolve(__dirname, "./writeStream.txt");
    let ws = fs.createWriteStream(str, {
      highWaterMark: 5,
      autoClose: true,
    });
    for (let i = 0; i < 100; i++) {
      ws.write(`hello, #${i}!\n`);
    }
    ws.end('This is the end\n');
    ws.on('finish', () => {
      console.log('All writes are now complete.');
    });
    // let i = 0;
    // function writeText() {
    //   let flag = true;

    //   while (i < 20 && flag) {
    //     flag = ws.write("c", "utf-8");
    //     i++;
    //     if (!flag) {
    //       console.log(i)
    //     }
    //   }
    // }
    // ws.once("drain", () => {
    //   writeText();
    // });
    // writeText();
  }
  writeStream()
  function fdChmod() {
    let str = path.join(__dirname, './learn.txt')
    // fs.chmod(str, 0777, (err) => {
    //   if (err)
    //     throw err
    // })
    //打开文件之后，改变权限不能用r打开，当权限只读，fchmod无效
    fs.open(str, 'a', function (err1, fd) {
      if (err1)
        throw (err1)
      console.log(fd);
      fs.fchmod(fd, 0777, (err2) => {
        if (err2)
          throw err2
        fs.close(fd, (err3) => {

        })
      })
    })
  }
  function fdataSync() {

    let url = path.join(__dirname, './copyFile.txt')
    fs.chmod(url, 0777, (err) => {
      if (err)
        throw err

      fs.open(url, 'r+', (err, fd) => {
        fs.writeFile(fd, 'huangln', () => {
          fs.fdatasync(fd, (err) => {
            if (err)
              throw err
          })
        })
      })
    })
  }
  function trunCateFile() {
    let url = path.join(__dirname, './copyFile.txt')
    let fd = fs.openSync(url, 'r+')
    //截断，会对文件修改
    fs.ftruncate(fd, 4, (err) => {
      if (err)
        throw err
    })
    //截取文件内容truncate
    fs.truncate(path.join(__dirname, './copyFile.txt'), 0, (err) => {
      if (err)
        throw err
    })
    console.log(fs.readFileSync(path.join(__dirname, './copyFile.txt'), 'utf-8'));

  }
  function changeTime() {
    let url = path.join(__dirname, './copyFile.txt')
    fs.lstat(url, (err, stats) => {
      console.log(stats.atime);
    })
    fs.open(url, 'r+', (err, fd) => {
      let tiem = new Date()
      fs.futimesSync(fd, tiem, tiem)
      fs.fstat(fd, (err, stats) => {
        console.log(stats.atime);
      })
    })

  }
  function linkpath() {
    // link是将一个文件的引用连接创建一个新的，使用新的
    fs.linkSync(learnText, 'newpath')
    fs.readFile('newpath', 'utf-8', (err, str) => {
      if (err)
        throw err
      console.log(str);
    })
  }
  function mkdir() {
    fs.mkdir(__dirname + '/name/a', { recursive: true }, (err) => {
      if (err)
        throw err
    })
  }
  function realStr() {
    //解析文件，返回路径，第二个参数是解析方法,加了native是仅支持可转换为UTF8字符串的路径。
    fs.realpath.native(learnText, { encoding: 'UTF-8' }, (err, data) => {
      console.log(data);
    })
  }

  // ??
  function symlink() {
    let url1 = path.join(__dirname, './learn.txt')
    let url = path.join(__dirname, './name')

    //unlink异步删除文件或符号链接
    // fs.unlink(url1, (err) => {
    //   if (err)
    //     throw err
    // })
    fs.symlink(url1, 'markdown1.txt', (err) => {
      if (err)
        throw err

    })
  }

  function watchFile() {
    let url = path.join(__dirname, './learn.txt')
    fs.watchFile(url, {
      persistent: true,//只要监视文件，进行是否继续运行
      recursive: false,//是否递归监视子文件
      encoding: 'utf8'//指定传递给回调函数的文件名字符编码
    }, (event, file) => {
      console.log(event);
    })
    //接触监视，不传递监视器，就是接触所有监视器
    fs.unwatchFile(url)
  }
  function promiseFun() {
    var fileHandle = fs.promises;
    let promiseOpen = fileHandle.open(path.join(__dirname, './copyFile.txt'), 'r+')
    promiseOpen.then(res => {
      res.truncate(0)
    })
  }
  res.send("123");
});
module.exports = route;

