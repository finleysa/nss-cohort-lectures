(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getExcercises();
    $('#create').click(create);
  }

  function getExcercises(){
    var url = window.location.origin.replace(/\d{4}/, '4000');
    url += '/excercises';
    console.log(url);
    $.getJSON(url, displayExcercises);
  }

  function displayExcercises(data){
    console.log(data);
    var $body = $('#body');
    for(var i=0; i<data.excercises.length; i++){
      var $tr = $('<tr>');
      var $td1 = $('<td>');
      var $td2 = $('<td>');
      var $td3 = $('<td>');
      var $td4 = $('<td>');
    
      $td1.text(data.excercises[i].name);
      $td2.text(data.excercises[i].time);
      $td3.text(data.excercises[i].calories);
      $td4.text(data.excercises[i].date);

      $tr.append($td1, $td2, $td3, $td4);
      $body.prepend($tr);
    }
  }

  function create(){
    var name = $('#name').val();
    var time = $('#time').val();
    var calories = $('#calories').val();
    var date = $('#date').val();
    
    var url = window.location.origin.replace(/\d{4}/, '4000');
    url += '/excercises';
    var options = {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:calories, date:date};
    options.success = excerciseCreated;
      
    $.ajax(options);
  }

  function excerciseCreated(){
    $('#body').empty();
    getExcercises();
  }
})();

