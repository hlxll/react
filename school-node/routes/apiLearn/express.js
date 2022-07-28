var express = require("express");

var admin = express();
var jwt = require("jsonwebtoken");

//子应用使用use安装到父应用上，会触发这个回调，初始化时候就执行
admin.on("mount", function (parent) {
  console.log("父级对象");
  // console.log(parent);
});
//匹配第一个参数符合的路径，都会执行一遍，在调用符合路由时调用
admin.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// admin.delete('/delete', (req, res) => {
//     console.log(req);
//     res.send('DELETE request to homepage')
// })

admin.get("/", (req, res) => {
  var bool = admin.disabled("trust proxy");
  console.log(bool);
  res.send("使用use挂载下级路径");
});
admin.post("/jwt", (req, res) => {
  const jwyKey = "aksjdaklhskncnkjnsjdhfjsndjkb";
  const database = {
    username: "huanglin",
    password: 123456,
  };
  const { username, password } = req.body;

  if (username == database.username && password == database.password) {
    jwt.sign({ username }, jwyKey, { expiresIn: "30s" }, (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ username, message: "登陆成功", token });
    });
  } else {
    res.send("失败");
  }
});
admin.get("/afterLogin", (req, res) => {
  const jwyKey = "aksjdaklhskncnkjnsjdhfjsndjkb";
  jwt.verify(token, jwyKey, (err, payload) => {
    if (err) {
      res.sendStatus(403);
    }
    res.send({ payload });
    //payload包含数据
    //iss：提供方。
    // sub：主题，一般是用户ID。
    // exp：过期时间。
    // iat：创建时间。
    // jti：token的唯一标识。
  });
});
module.exports = admin;
