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

  Stock.prototype.value = function(fn){
    var self = this;
    var url = ('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + self.symbol + '&callback=?');
    $.getJSON(url, function(quote){
      var total = quote.LastPrice * self.shares;
      fn(total);
    });
  };

  return Stock;

})();

