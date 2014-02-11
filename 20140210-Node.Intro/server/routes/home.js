

'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name: 'My name is Node'});
};

exports.color = function(req, res){
  res.jsonp({faveColor: 'Lavender'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum:total});
};

exports.canDrink = function(req, res){
  var yesorno = 'cannot';
  if (req.params.age >= 21){
    yesorno = 'can';
  }else if (req.params.age < 21 && req.params.age >=18){
    yesorno ='might be able to';
  }
  res.jsonp({name:req.params.name, drink:yesorno});
};
