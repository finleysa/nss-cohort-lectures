/* jshint unused:false */

var Stock = (function(){
  
  'use strict';

  function Stock(symbol, shares, purchasePrice){
    this._symbol = symbol;
    this._shares = shares;
    this._purchasePrice = purchasePrice;
  }

  Object.defineProperty(Stock.prototype, 'symbol', {
    get: function(){return this._symbol;}
  });

  Object.defineProperty(Stock.prototype, 'shares', {
    get: function(){return this._shares;}
  });

  Object.defineProperty(Stock.prototype, 'purchasePrice', {
    get: function(){return this._purchasePrice;}
  });

    Stock.prototype = function(){
  };

  return Stock;

})();

