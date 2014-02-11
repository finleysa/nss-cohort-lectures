/*global Animal: false*/

(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos = [];

    photos[0] = 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCL8G5AgOqXEh7my_VHTYTvpHl1fwnLZlfSIb7omo9sQzS2yq04A)';
    photos[1] = 'url(http://i.imgur.com/963F6JB.jpg)';
    animal = new Animal('fido','dog','3','male','purple',photos,'Such wow, So amaze');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://i.imgur.com/XXbPqfX.jpg)';
    animal = new Animal('weezy','dog','4','male','white',photos,'Dog rapper');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://i.imgur.com/1mPygbH.jpg)';
    photos[1] = 'url(http://i.imgur.com/57r39gt.jpg)';
    animal = new Animal('kitty','cat','1','female','purple',photos,'Tiny kitten');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://i.imgur.com/v93isLC.jpg)';
    animal = new Animal('duck','cat','2','male','white',photos,'Lazy pussy');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://i.imgur.com/GESr9Ui.gif)';
    animal = new Animal('splash','elephant','3','male','brown',photos,'Water elephant');
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://i.imgur.com/XwqEvER.jpg)';
    animal = new Animal('foxxy','fox','5','female','red',photos,'Its a fox!');
    animals.push(animal);
    
    
    
    return animals;
  };

})();
