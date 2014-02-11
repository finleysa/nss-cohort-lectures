
$(document).ready(initialize);

function initialize(){
  // $ means JQuery
  // $('css or JQuery selector')
  $('h1').css('color', 'red');
  $('h1').css('font-size', '30px');
  var currentText = $('h1').text();
  console.log(currentText);
  $('h1').text("Welcome to the Jungle!");

  $('div').css('color', 'blue');
  $('#d2').css('font-size', '10px');
  $('#d3').css('background-color', 'yellow');
  $('.c1').css('font-family', 'monospace').css('font-name', 'Times New Roman').text("Steven");


  var color = prompt("What background color do you want?");
  $('#d3').css('background-color', color);
  var userText = prompt("What do you want to change the text to?");
  $('#d3').text(userText);


  var numPs = $('.cp').length;
  console.log(numPs);
}

