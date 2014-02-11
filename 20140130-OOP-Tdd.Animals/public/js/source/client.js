/*jshint unused:false*/

var Client = (function(){

  'use strict';

  function Client(name, animal){
    this.name = name || 'no name provided';
    this.animals = [];
  }

  Client.prototype.adopt = function(animal){
    this.animals.push(animal);
  };

  return Client;
})();
