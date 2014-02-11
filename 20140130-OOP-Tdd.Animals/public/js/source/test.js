/* global test:false, Animal:false, Client:false, ok:false, Shelter:false, deepEqual:false */

'use strict';

test( 'Shelter', function() {
  var s1 = new Shelter();
  var shelter = new Shelter();
  var string = 'some string';

  ok(shelter instanceof Shelter, 'Instance of Shelter?' );
  ok(s1 instanceof Shelter, 'Instance of Shelter?' );
  ok(!(string instanceof Shelter), 'Instance of Shelter?' );
});

test( 'Shelter#name', function() {
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.name, 'Green Hills Shelter', 's1 should have a name' );
});

test( 'Shelter#address', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.location = 'Broadway';
  var s2 = new Shelter();

  deepEqual(s1.location, 'Broadway', 's1 should have a location' );
  deepEqual(s2.location, 'Not Defined', 's2 should not have a location' );
});

test( 'Shelter#capacity', function() {
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.capacity, '0', 's1 should have 0 capacity' );
});

test( 'Shelter#setHours()', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.setHours([
    {day:'Mon', open: '8am', close: '5pm'},
    {day:'Wed', open: '11am', close: '2pm'},
    {day:'Fri', open: '9am', close: '4pm'}
  ]);
  deepEqual(s1.hours, 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have set hours' );
});

test('Animal', function() {
  var a1 = new Animal();
  var a2 = 'Fido';
  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
  ok(!(a2 instanceof Animal), 'a1 should be an instance of Animal');
});

test('Animal#name', function() {
  var a1 = new Animal('fred');
  
  ok(a1.name, 'fred', 'a1 name should be fred');
});

test('Animal#species', function() {
  var a1 = new Animal('fred','dog');
  var a2 = new Animal();

  a1.species = 'dog';
  ok(a1.species, 'dog', 'a1 species should be dog');
  ok(a2.species, 'Not set', 'a1 species should be dog');
});

test('Animal#gender', function() {
  var a1 = new Animal('fred','dog','male');
  a1.gender = 'male';
  ok(a1.gender, 'male', 'a1 gender should be male');
});

test('Animal#age', function() {
  var a1 = new Animal('fred','dog', 'male', '3');
  var a2 = new Animal();
  ok(a1.age, '3', 'a1 should have an age of 3');
  a2.age = '4';
  ok(a2.age, '4', 'a2 should have an age of 4');
});

/*
test('Animal#description', function() {
  var s1 = new Animal('Rover', 'dog', 'Male', '3');
  deepEqual(s1.description, 'Rover is a Male dog that is 3 years old', 's1 should have set hours' );
});
*/

test('Sheleter#AddAnimal',function(){
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fred');
  s1.addAnimal(a1);

  ok(s1.animals.length ===1, 's1 should have 1 a1');
  ok(s1.animals[0] instanceof Animal, 's1 should have 1 aniaml');
  deepEqual(s1.animals[0].name, 'fred', 'fido should be in the shelter');
});

test('Shelter#placeAnimal',function(){
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fred');
  var a2 = new Animal('may');
  var a3 = new Animal('john');
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);
  s1.placeAnimal('may');
  ok(s1.animals.length === 2, 's1 should have 2 ans');

});

test('Client',function(){
  var c1 = new Client();

  ok(c1 instanceof Client, 'c1 is an instance of Customer');
});

test('Client#name', function() {
  var c1 = new Client('fred');
  
  ok(c1.name, 'fred', 'c1 name should be fred');
});

test('Client#adopt',function(){
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('chip','dog', 'male', '3');
  var a2 = new Animal('doggie','dog', 'male', '3');
  var c1 = new Client();
  
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  c1.adopt(s1.placeAnimal('chip'));
  c1.adopt(s1.placeAnimal('doggie'));
  deepEqual(c1.animals[0].name, 'chip', 'c1 is an instance of Customer');
  deepEqual(c1.animals[1].name, 'doggie', 'c1 is an instance of Customer');
});
