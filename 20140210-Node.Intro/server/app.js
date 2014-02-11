'use strict';

var express = require('express');
var home = require('./routes/home');
var app = express();
var math = require('./routes/math');

app.set('port', process.env.PORT || 4000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', home.index);
app.get('/name', home.name);
app.get('/color', home.color);
app.get('/sum/:a/:b', home.sum);
app.get('/canDrink/:name/:age', home.canDrink);
app.get('/product', math.product);
app.get('/stuff', math.names);

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
  console.log('Node server listening. Port: ' + app.get('port'));
});

