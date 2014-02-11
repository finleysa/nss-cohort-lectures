(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#add').click(add);
    $('#canDrink').click(canDrink);
    $('#product-button').click(product);
    $('#button').click(stuff);
  }
  
  function stuff(){
    var names = $('#names').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/stuff/?names='+names+'&callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product/?numbers='+numbers+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#sum').text(data.product);
    });
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){console.log(data);});
  }
  
  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/color?callback=?';
    $.getJSON(url, function(data){console.log(data);});
  }
  
  function add(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/sum/'+num1+'/'+num2+'/?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#sum').text(data.sum);
    });
  }

  function canDrink(){
    var name = $('#name').val();
    var age = $('#age').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/canDrink/'+name+'/'+age+'/?callback=?';
    $.getJSON(url, function(data){
      $('#can-drink').text(data.name+' '+ data.drink+' drink');
    });
  }
})();
