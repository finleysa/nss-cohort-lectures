/*jshint unused:false*/
/*globals _:false*/
var Shelter = (function(){

  'use strict';

  function Shelter(name, locate, hours){
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = '0';
    this.animals = [];
    this.adopted =[];
  }

  Shelter.prototype.setHours = function(hours){
    var hoursString='';
    for(var i=0; i<hours.length; i++){
      hoursString += hours[i].day + ' ' + hours[i].open + '-' + hours[i].close;

      if(i+1 !== hours.length){
        hoursString += ', ';
      }
      this.hours = hoursString;
    }
  };

  Shelter.prototype.addAnimal = function(animal){
    this.animals.push(animal);
  };

  Shelter.prototype.placeAnimal = function(animal){
    for(var j=0; j< this.animals.length; j++){
      if (animal === this.animals[j].name){
        var temp = this.animals[j];
        this.animals.splice(j, 1);
        return temp;
      }
    }
  };
  return Shelter;
})();
