
$(document).ready(initialize);

function initialize(){
  $('#add-color').click(clickAddColor);
  $('#add-pixels').click(clickAddPixe);
  $('#colors').on("click", ".color", clickSelectColor);
  $('#pixel').on("mouseover", ".pixel", hoverColorPixel);
}

function hoverColorPixel(){
  var color = $('.selected').css('background-color');
  $(this).css('background-color', color);
}


function clickAddPixels(){
  var num = $('#number-text').val();
  num = parseInt(num);

  for (var i=0; i<num; i++){
    var $pixel = $('div');
    $pixel.addClass('pixel');
    $('pixel').prepend($pixel);
  }
}

function clickSelectColor(){
  if($(this).hasClass('selected'))
    $(this).removeClass('selected');
  else{
    $('.color').removeClass('selected');
    $(this).addClass('selected');
  }
}

function clickAddColor(){
  // get color from textbox
  var color = $('#color-text').val();

  $('#color-text').val('');
  $('#color-text').focus();

  // var becomes a new ddiv
  var $newDiv = $('<div>');

  $newDiv.addClass('color');
  $newDiv.css('background-color', color);

  // append the colors class
  $('#colors').append($newDiv);
}


