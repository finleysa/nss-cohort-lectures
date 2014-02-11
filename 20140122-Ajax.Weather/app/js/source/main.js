/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/308b7b9ab10ef4d2/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    var temp = data.current_observation.temperature_string;
    $('h2').text(temp);
  }

})();
