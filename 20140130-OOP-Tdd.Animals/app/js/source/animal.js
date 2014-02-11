/*jshint unused:false*/

var Animal = (function(){

  'use strict';

  function Animal(name, species, gender, age){
    this.name = name;
    this.species= species || 'Not Set';
    this.gender = gender ||'Not Set';
    this.age = age || 0;
//    this.color = 'Not Set';
//    this.description = (name +' is a '+gender+ ' '+species+' that is '+age+' years old');
//    this.photos = 'N/A';
  }

    
  return Animal;
})();
