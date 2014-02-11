/* exported Product */

var Product = (function(){
  
  'use strict';

  function Product(name, price){
    this.name = name || '';
    this.price = price || 0;
  }

  return Product;
})();
