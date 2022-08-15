var express = require("express");
var route = express();

//session是保存在服务器内存中的，当请求类session接口之后，session就保存在变量中，req.session,
//再次请求之后，再次从req.session获取，（当本地代码改变，这个sesison就被清空了。）
//前端就会保存在浏览器中的cookie中，express需要安装express-session插件，对请求拦截处理
route.get("/session", function (req, res) {
  req.session.username = "huanglin";
  res.send("登陆成功");
});
route.get("/getSession", function (req, res) {
  res.json({
    msg: req.session.username,
  });
});
route.get("/delSession", function (req, res) {
  req.session.destroy(function () {
    res.clearCookie();
  });
  res.send("推出登陆");
});
module.exports = route;
