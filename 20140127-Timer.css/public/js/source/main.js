(function(){
  
  'use strict';
  
  $(document).ready(init);

  var timer;

  function init(){
    //setTimeout(alertMe, 5000);
    $('#start').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
  }

  //function alertMe(){
    //alert('this was called by a timer');
  //}
  
  function start(){
    clearInterval(timer);
    timer = setInterval(makeColorBox, 100);
    console.log(randomColor());
  }

  function makeColorBox(){
    var $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', randomColor());
    $('#container').prepend($div);
    $('body').css('background-color', randomColor());
  }

  function stop(){
    clearInterval(timer);
  }

  function reset(){
    $('#container').empty();
    $('body').css('background-color', 'white');
  
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    var color = 'rgb('+red+','+green+','+blue+')';
    return color;
  }
})();
