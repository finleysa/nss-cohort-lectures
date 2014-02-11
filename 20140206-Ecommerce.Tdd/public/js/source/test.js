/* global test:false, ok:false, Product:false, Person:false, deepEqual:false*/

'use strict';

test('Product#new', function(){
  var p1 = new Product('Xbox', 400);
  
  ok(p1 instanceof Product, 'Xbox is instance of Product');
  ok( p1.price === 400, 'Xbox is 400 dollars');
  deepEqual( p1.name, 'Xbox', 'p1 name is Xbox');
});

test('Person#new', function(){
  var p1 = new Person('Guy', 40000);
  
  ok(p1 instanceof Person, 'p1 is instance of Person');
  ok( p1.cash === 40000, 'p1 has 40000 dollars');
  deepEqual( p1.name, 'Guy', 'p1 name is Guy');
});

test('Person#cart', function(){
  var p1 = new Person('Guy', 40000);
  var r1 = new Product('Xbox', 400);
  var r2 = new Product('Kindle', 300);
  
  p1.cart.add(r1, 8);
  deepEqual(p1.cart.products[0].name, 'Xbox', '1st product should be Xbox');
  
  p1.cart.add(r2, 3);
  deepEqual(p1.cart.products[8].name, 'Kindle', '9th product should be Kindle');
  deepEqual(p1.cart.total, 4100, 'Total should be 4100');
  
  console.log(p1.cart.products);
  p1.cart.remove('Xbox', 7);
  deepEqual(p1.cart.products.length, 4, 'Length should be 4');
 
  p1.checkOut();
  deepEqual(p1.cash === 38700, true, 'p1 cash should be 38800 on checkOut');
});
