(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#create').click(create);
    $('#reset').click(getExcercises);
    $('#select').change(filter);
    
    getExcercises();
  }

  function filter(){
    var url = window.location.origin.replace(/\d{4}/, '4000');
    url += '/excercises';
    $.getJSON(url, function(data){
      var selected = $('#select').val();
      var array = data.excercises;
      array = _.flatten(array);
      array = _.filter(array, function(x){return x.name === selected;});
      var $body = $('#body');
      $body.empty();
      
      for(var i=0; i<array.length; i++){
        var $tr = $('<tr>');
        var $td1 = $('<td>');
        var $td2 = $('<td>');
        var $td3 = $('<td>');
        var $td4 = $('<td>');
        $td1.text(array[i].name);
        $td2.text(array[i].time);
        $td3.text(array[i].calories);
        $td4.text(array[i].date);
        $tr.append($td1, $td2, $td3, $td4);
        $body.prepend($tr);
      }
    });
  }

  function getExcercises(){
    var url = window.location.origin.replace(/\d{4}/, '4000');
    url += '/excercises';
    $.getJSON(url, displayExcercises);
    $.getJSON(url, populateExcercises);
  }

  function displayExcercises(data){
    var $body = $('#body');
    console.log(data);
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

  function populateExcercises(data){
    $('#select').empty();
    var array = data.excercises;
    array = _.flatten(array, 'name');
    array = _.uniq(array);
    _.map(array, function(x){
      var $option = $('<option>');
      $option.text(x);
      $('#select').append($option);
    });
  }

  function create(){
    var name = $('#name').val();
    var time = $('#time').val();
    var calories = $('#calories').val();
    var date = $('#date').val();
    if(name !== '' && time !== '' && calories !== '' && date !== ''){
      var url = window.location.origin.replace(/\d{4}/, '4000');
      url += '/excercises';
      var options = {};
      options.url = url;
      options.type = 'POST';
      options.data = {name:name, time:time, calories:calories, date:date};
      options.success = excerciseCreated(name, time, calories, date);
      $.ajax(options);
    }
  }

  function excerciseCreated(name, time, calories, date){
    var $body = $('#body');
    var $tr = $('<tr>');
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    $td1.text(name);
    $td2.text(time);
    $td3.text(calories);
    $td4.text(date);
    $tr.append($td1, $td2, $td3, $td4);
    $body.prepend($tr);
  }
})();

