var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var indexRouter = require("./routes/apiLearn/index5");
var usersRouter = require("./routes/users");
var planeRouter = require("./routes/planeTicket");
var trainTicketRouter = require("./routes/trainTicket");
var ticketsRouter = require("./routes/tickets");
var localRouter = require("./routes/local");
var hotelRouter = require("./routes/hotel");
var holidayRouter = require("./routes/holiday");
var groupBuyingRouter = require("./routes/groupBuying");
var queryStringRouter = require("./routes/queryString");

// var nodeRouter = require("./routes/node");
var pathModule = require("./routes/path_module");

var app = express();


// view engine setup
app.set("views", path.join(__dirname, "views"));
//配置模版文件后缀
app.set("view engine", "html");
//配置模版文件解析工具,这里使用ejs
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.json({ limit: "50mb" }));
//配置请求参数，配置bodyParser之后就可以直接使用req.body获取参数
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(logger("dev"));
app.use(express.Router({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//配置session
app.use(
  session({
    secret: "secret key",
    saveUninitialized: false,
    cookie: {
      maxAge: 3600,
    },
  })
);

//静态文件配置
var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use(express.static(path.join(__dirname, "public"), options));

// app.use("/", indexRouter);
app.use((req, res, next) => {
  // console.log(req.body);
  next();
});
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send("Something broke!");
  }
  next();
});
app.locals.title = "开发express";
app.use("/huanglin", (req, res, next) => {
  console.log("特定路由中间件");
});
// app.get('/:name', (req, res, next) => {
//   // console.log(req);
//   next()
// }, function (req, res) {
//   res.send(app.locals || '空的')
// })
function funLog(req, res, next) {
  next();
}
function funTip(req, res, next) {
  next();
}
var funs = [funLog, funTip];
app.get("/name/:id", funs, function (req, res) {
  res.send(app.locals || "空的");
});

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// 挂载
var adminRouter = require('./routes/apiLearn/index1.js')
app.use("/admin", adminRouter)

app.use("/user", usersRouter);
app.use("/plane", planeRouter);
app.use("/trainTicket", trainTicketRouter);
app.use("/tickets", ticketsRouter);
app.use("/local", localRouter);
app.use("/hotel", hotelRouter);
app.use("/holiday", holidayRouter);
app.use("/groupBuying", groupBuyingRouter);
app.use("/pathModule", pathModule);
// app.use('/node', nodeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



/**
 * 实现ws通信
 * 
*/
var ws = require("nodejs-websocket")
let chatA = null
let chatB = null
ws.createServer(function (conn) {
  conn.on("text", function (msg) {
    if (chatA && chatB) {
      if (conn === chatA) {
        chatB.send(msg)
      } else {
        chatA.send(msg)
      }
      return;
    }
    if (msg === 'chatA_token') {
      chatA = conn
      return;
    }
    if (msg === 'chatB_token') {
      chatB = conn
    }
  })
  conn.on("close", function (code, reason) {
    console.log("closed closed")
  })
  conn.on("error", function (code, reason) {
    console.log("error error")
  })
}).listen(5000)
module.exports = app;
