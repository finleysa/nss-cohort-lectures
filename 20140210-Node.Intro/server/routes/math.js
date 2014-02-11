'use strict';

var _ = require('lodash');

exports.product = function(req, res){
  var numbers = req.query.numbers.split(', ');
  var prod = _.reduce(numbers, function(acc, num){return acc * num;}, 1);
  res.jsonp({product:prod});
};

exports.names = function(req, res){
  var string = req.query.names.split(', ');
  console.log(string);
  _.remove(string, function(x){return x.length % 2 === 0;});
  var numbers = _.map(string, function(x){return x.length;});
  var sum = _.reduce)string, function(acc, x){ return 
  console.log(numbers);
};
