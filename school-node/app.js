var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trainTicketRouter = require('./routes/trainTicket');
var ticketsRouter = require('./routes/tickets');
var localRouter = require('./routes/local');
var hotelRouter = require('./routes/hotel');
var holidayRouter = require('./routes/holiday');
var groupBuyingRouter = require('./routes/groupBuying');
var nodeRouter = require('./node');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trainTicket', trainTicketRouter);
app.use('/tickets', ticketsRouter);
app.use('/local', localRouter);
app.use('/hotel', hotelRouter);
app.use('/holiday', holidayRouter);
app.use('/groupBuying', groupBuyingRouter);
app.use('/node', nodeRouter);

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

module.exports = app;
