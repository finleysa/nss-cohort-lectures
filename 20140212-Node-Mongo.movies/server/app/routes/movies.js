'use strict';

var Movie = require('../models/movie');
var MongoClient = require('mongodb').MongoClient;

exports.create = function(req, res){
  var db = req.app.locals.db;
  var movies = db.collection('movies');
  var movie = new Movie(req.body);
  movies.insert(movie, function(err, records){
    res.send(records[0]);
  });

};

exports.index = function(req, res){
  MongoClient.connect('mongodb://localhost/imdb', function(err, db){
    if(err) {throw err;}
    console.log('Connected to Database');

    db.collection('movies').find().toArray(function(err, movies){
      res.send({movies:movies});
    });
  });
};
