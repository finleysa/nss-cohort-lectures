/* exported Client */
/* global _:false */
var Client = (function(){

  'use strict';

  function Client(name){
    this.name = name;
    this._portfolios = [];
  }

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.addPortfolio = function(input){
    this._portfolios = this._portfolios.concat(input);
  };

  Client.prototype.getPortfolio = function(input){
    var names = [].concat(input);

    var output = _.filter(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  Client.prototype.delPortfolio = function(input){
    var names = [].concat(input);

    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  return Client;
})();

