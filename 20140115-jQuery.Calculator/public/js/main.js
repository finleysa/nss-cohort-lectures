
$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
  $('#product').click(product);
}

function calculate(){
  //get values from user
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);

  var num2 = $('#num2').val();
  num2 = parseFloat(num1);

  var operator = $('#operator').val();
  //find the result and save to variable
  var result = compute(num1, num2, operator);
  //display reesult
  $('#result').text(result);
  }

  function compute(num1, num2, operator){
    var result=0;
  //choose the operator
  switch(operator){
    case '+': result =(num1 + num2);
              break;
    case '-': result =(num1 - num2);
              break;
    case '/': result =(num1 / num2);
              break;
    case '*': result =(num1 * num2);
              break;

     }
  return result;
  }

function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#operator').val('');
  $('#result').text('');
}

function sum(){
  var temp=0;
  $('.numbers').each(
      function (index, element){
        temp += parseFloat(element.value)
      });
  $('#result').text(temp);

}
function product(){

  var temp=0;
  $('.numbers').each(
      function (index, element){
        temp += parseFloat(element.value);
      });
  $('#result').text(temp);
}

