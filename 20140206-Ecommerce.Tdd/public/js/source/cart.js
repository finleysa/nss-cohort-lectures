/* exported Cart */

var Cart = (function(){
  
  'use strict';

  function Cart(){
    this.products = [];
  }

  Object.defineProperty(Cart.prototype, 'total',{
    get: function(){
      var total = 0;
      for(var i=0; i<this.products.length; i++){
        total += this.products[i].price;
      }
      return total;
    }
  });

  Cart.prototype.add = function(product, quantity){
    console.log(product);
    console.log(quantity);
    for(var i=0; i<quantity; i++){
      this.products.push(product);
    }
    console.log(this.products);
  };

  Cart.prototype.remove = function(product, quantity){
    for(var i=0; i<this.products.length; i++){
      if (this.products[i].name === product){
        swap(this.products[0], this.products[i]);
      }
    }
    for(var j=0; j<quantity; j++){
      this.products.shift();
    }
  };

  function swap(x, y){
    var temp = x;
    x = y;
    y = temp;
  }
  return Cart;
})();
