
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var sql = require('./middleware/sql');

//routes
//var indexRouter = require('./routes/index');
var userRouter = require('./routes/useroute')
var gamesRouter = require('./routes/games');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet())

//app.use('/', indexRouter);
//games  workbench
app.use('/games', gamesRouter);
//user  workbench
app.use('/users', userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Open for future uses.
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  next();
  // render the error page
  //res.status(err.status || 500);
  //res.send("err.message");
});

sql.openDB();
sql.init();

module.exports = app;
