(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#movie').submit(submitMovie);
    getMovies();
  }

  function getMovies(){
    var url = window.location.origin.replace(/\d{4}/, 4000) + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    var movies = _.flatten(data.movies);
    console.log(movies);
    
    for(var i=0; i<movies.length; i++){
      var url = 'url('+movies[i].poster+')';
      console.log(url);
      var $div = $('<div>');
      var $title = $('<div>');
      $title.text(movies[i].title);
      var $actors = $('starring' +movies[i].actors+ ' directed by');
      $div.addClass('box');
      $div.css('background-image', url);
      var string =
      movies[i].name+
      ' starring '+movies[i].actors+'. Directed by '+movies[i].director+
      '. Length: '  +movies[i].length+
      ' minutes, Rated: '  +movies[i].rating+
      '. Made by '  +movies[i].studio+
      ' studios in '    +movies[i].year;
      console.log(string);
      $('#container').append($div);
    }
    
  }

  function submitMovie(event){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/\d{4}/, 4000) + '/movies';
    var type = 'POST';
    var success = newMovie;
    $.ajax({url:url, type:type, data:data, success:success});
    $('#movie input').val('');
    event.preventDefault();
  }

  function newMovie(movie){
    console.log(movie);
  }

})();

