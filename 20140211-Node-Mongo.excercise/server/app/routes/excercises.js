'use strict';

var MongoClient = require('mongodb').MongoClient;
var Excercise = require('../models/excercise');
    
exports.create = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err) {throw err;}
    console.log('Connected to Database');
    var excercise = new Excercise(req.body.name, parseFloat(req.body.time), parseInt(req.body.calories), req.body.date);
     
    db.collection('excercises').insert(excercise, function(err, x){
      res.send(x[0]);
      console.log(x);
    });
  
    res.jsonp({ok:true});
  });
};

exports.index = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err) {throw err;}
    console.log('Connected to Database');
    
    db.collection('excercises').find().toArray(function(err, excercises){
      res.send({excercises:excercises});
    });
  });
};

exports.name = function(req, res){
  MongoClient.connect('mongodb://localhost/gym', function(err, db){
    if(err) {throw err;}
    console.log('Connected to Database');
    
    db.collection('excercises').find({name:req.params.name}).toArray(function(err, names){
      res.send({names:names});
    });
  });
};
