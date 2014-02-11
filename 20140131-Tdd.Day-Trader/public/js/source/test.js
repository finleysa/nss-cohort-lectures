/* global  Client:false, Portfolio:false, asyncTest:false, start:false, throws:false, test:false, ok:false, deepEqual:false, Stock:false */

'use strict';

test( 'Stock#new', function() {
  var s1 = new Stock('AAPL', 50, 25);
  
  throws(function(){
    s1.symbol ='blah';
  }, 's1 should not be able to set symbol on s1');

  throws(function(){
    s1.shares = 5;
  }, 's1 shares should not equal 5');
  
  throws(function(){
    s1.purchasePrice ='blah';
  }, 's1 purchase price should not equal "blah"');
  
  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 should be AAPL');
  deepEqual(s1.shares, 50, 's1 shares should be 50');
  deepEqual(s1.purchasePrice, 25, 's1 pruchase price shoul be 25');
});

asyncTest('Stock#value', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.value(function(val){
    ok(val > 0, 'appl total value should be above 0');
    start();
  });
});

test('Portfolio#new', function(){
  var p1 = new Portfolio('portfolio');

  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.stockCount, 0, 'p1 stock count should be 0');
  deepEqual(p1.name, 'portfolio');
});

test('Portfolio#addStock', function(){
  var p1 = new Portfolio('portfolio');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('GOOG', 100, 50);
  var s3 = new Stock('INTC', 10, 20);
  var s4 = new Stock('NVDA', 30, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  deepEqual(p1.stockCount, 4, 'p1 stock count should be 4');
});

test('Portfolio#getStock', function(){
  var p1 = new Portfolio('portfolio');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('GOOG', 100, 50);
  var s3 = new Stock('INTC', 10, 20);
  var s4 = new Stock('NVDA', 30, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);


  var s5 = p1.getStock('AAPL');
  var s6 = p1.getStock('ZZZZ');
  var stocks = p1.getStock(['AAPL', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 'should find appl');
  ok(!s6, 'should not find ZZZZ');
  deepEqual(stocks.length, 2, 'Should find 2 stocks');
  deepEqual(stocks[0].symbol, 'AAPL', 'should get amzn');
  deepEqual(stocks[1].symbol, 'GOOG', 'should get goog');
});

test('Portfolio#deleteStock', function(){
  var p1 = new Portfolio('portfolio');
  var s1 = new Stock('AAPL', 50, 25);
  var s2 = new Stock('GOOG', 100, 50);
  var s3 = new Stock('INTC', 10, 20);
  var s4 = new Stock('NVDA', 30, 50);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);
 
  var s5 = p1.removeStock('AAPL');
  var s6 = p1.removeStock('ZZZZ');
  var stocks = p1.removeStock(['INTC', 'GOOG']);
  deepEqual(p1.stockCount, 1, 'Stock count should be 1');
  deepEqual(s5.symbol, 'AAPL', 's5 symbol should be AAPL');
  deepEqual(stocks.length, 2, 'Stocks length should be 2');
  ok(!s6, 'should not find ZZZZ');
  deepEqual(stocks[0].symbol, 'GOOG', 'Should get GOOG');
  deepEqual(stocks[1].symbol, 'INTC', 'Should get INTC');
});

test('Client#new', function(){
  var p1 = new Portfolio('TechStock');
  var s1 = new Stock('AAPL', 50, 25);
  p1.addStock(s1);
  
  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.stockCount, 1,' Stock Count should be 1');
  
  var c1 = new Client('Robert');
  ok(c1 instanceof Client, ' c1 should be an instance of Client');

  c1.addPortfolio('TechStock');
  deepEqual(c1.portfolioCount, 1, 'c1 should have 1 portfilio');
});

test('Client#get', function(){
  var p1 = new Portfolio('TechStock');
  var s1 = new Stock('AAPL', 50, 25);
  p1.addStock(s1);
  var p2 = new Portfolio('SportsStock');
  var s2 = new Stock('NSH', 14, 15);
  p2.addStock(s2);

  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.stockCount, 1,' Stock Count should be 1');
  
  var c1 = new Client('Robert');
  ok(c1 instanceof Client, ' c1 should be an instance of Client');

  c1.addPortfolio('TechStock');
  deepEqual(c1.portfolioCount, 1, 'c1 should have 1 portfilio');
  c1.addPortfolio('SportsStock');
  deepEqual(c1.portfolioCount, 2, 'c1 should have 2 portfilio');
});

test('Client#delete', function(){
  var p1 = new Portfolio('TechStock');
  var s1 = new Stock('AAPL', 50, 25);
  p1.addStock(s1);
  
  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.stockCount, 1,' Stock Count should be 1');
  
  var c1 = new Client('Robert');
  ok(c1 instanceof Client, ' c1 should be an instance of Client');

  c1.addPortfolio('TechStock');
  c1.addPortfolio('GoldStock');
  c1.addPortfolio('EnergyStock');
  deepEqual(c1.portfolioCount, 3, 'c1 should have 3 portfilio');
  c1.removePortfolio('TechStock');
  deepEqual(c1.portfolioCount, 2, 'c1 should have 2 portfilios');
  c1.removePortfolio('EnergyStock', 'GoldStock');
  deepEqual(c1.portfolioCount, 0, 'c1 should have 0 portfilios');

});
