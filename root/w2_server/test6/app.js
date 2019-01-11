var express 	= require('express');
var path 		= require('path');
var favicon 	= require('serve-favicon');
var logger 		= require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser 	= require('body-parser');

/* Connect to database */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/w2');
// require("./models/Photo");


/* Difine routes */
var firstPage = require('./routes/firstpage');
var stores = require('./routes/stores');
var customers = require('./routes/customers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', firstPage);
app.use('/stores', stores);
app.use('/customers', customers);

// Catch 404 and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error handler
app.use(function(err, req, res, next){
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
