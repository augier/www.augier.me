
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose')
  , fs = require('fs')
  , log = require('log')
  , http = require('http')
  , https = require('https')
  , path = require('path');

var app = express();



console.log('routes: ' + JSON.stringify(routes));

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('secureport', process.env.PORT || 7654);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.favicon(path.join(__dirname, 'public/img/orange-star-small.ico')));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

});

var options = {
  key: fs.readFileSync('ssl/rsi-key.pem'),
  cert: fs.readFileSync('ssl/rsi-cert.pem')
};

app.configure('development', function(){
  app.use(express.errorHandler());
});

var routes = require('./routes/index.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/*
https.createServer(options, app).listen(app.get('secureport'), function(){
  console.log("Express server listening on port " + app.get('secureport'));
});*/