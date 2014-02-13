'use strict';

var Movie = require('../models/movie');
var mongodb = require('mongodb');

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });
};

exports.index = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find().toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.query = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  movies.find(req.query).toArray(function(err, records){
    res.send({movies:records});
  });
};

exports.remove = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var id = new mongodb.ObjectID(req.params.id);
  movies.remove({_id:id}, function(err, num){
    res.send({deleted:num, id:req.params.id});
  });
};

exports.edit = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var r = new Movie(req.body);
  var id = new mongodb.ObjectID(req.body.id);
  console.log(id);
  movies.update({_id:id}, {name:r.name,rating:r.rating,length:r.time,year:r.year,studio:r.studio,director:r.director,poster:r.poster,actors:r.actors}, function(err, records){
    res.send({records:records, movie:req.body});
  });
};
