var Dog = require('../lib/dog.js');
var Cat = require('../lib/cat.js');

exports.create = function(req, res){
  'use strict';
  var animal;
  if(req.query.type === 'dog'){
    animal = new Dog(req.query.name, req.query.gender, req.query.age);
  }else{
    animal = new Cat(req.query.name, req.query.gender, req.query.age);
  }

  res.jsonp({animal:animal});
};
