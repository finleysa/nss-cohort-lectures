(function(){

  'use strict';

  $(document).ready(initialize);

  var movieArray = [];
  var eMovie;

  function initialize(){
    $(document).foundation();
    $('#movie').submit(submitMovie);
    $('#toggle-form').click(toggleForm);
    $('#movies').on('click', '.studio', filterStudio);
    $('#movies').on('click', '.remove', deleteMovie);
    $('#movies').on('click', '.edit', editMovie);
    $('#edit').addClass('hide');
    $('#edit').click(submitEdit);
    getMovies();
  }

  function submitEdit(){
    $('#submit').toggleClass('hide');
    $('#edit').toggleClass('hide');
    var data = $('#movie').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    var type = 'PUT';
    var success = changeMovie;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function changeMovie(data){
    console.log(data);
    if (data.records === 1){
      console.log(eMovie);
      var about = 'A film by <span class="studio">'+data.movie.studio+'</span> staring <span class="actors">'+data.movie.actors.join(', ')+'</span>';
      console.log(about);
    }
  }

  function editMovie(){
    $('#submit').toggleClass('hide');
    $('#edit').toggleClass('hide');
    var movie = $(this).parent().parent().attr('data-id');
    eMovie = $(this).parent().parent();
    var edit = _.filter(movieArray, function(x){
      return x._id === movie;
    });

    $('#name').val(edit[0].name);
    $('#rating').val(edit[0].rating);
    $('#time').val(edit[0].length);
    $('#year').val(edit[0].year);
    $('#studio').val(edit[0].studio);
    $('#director').val(edit[0].director);
    $('#poster').val(edit[0].poster);
    $('#actors').val(edit[0].actors.join(', '));
    $('#id').val(edit[0]._id);
  }

  function deleteMovie(){
    var movie = $(this).parent().parent().attr('data-id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' + movie;
    var type = 'DELETE';
    var success = removeMovieFromBrowser;
    $.ajax({url:url, type:type, success:success});
  }

  function removeMovieFromBrowser(data){
    console.log(data);
    if (data.deleted === 1){
      $('.poster[data-id="'+data.id+'"]').remove();
    }
  }

  function filterStudio(){
    var studio = this.textContent;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/query?studio=' + studio;
    $.getJSON(url, displayMovies);
  }

  function getMovies(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    $('#movies').empty();

    for(var i = 0; i < data.movies.length; i++){
      displayMovie(data.movies[i]);
    }
  }

  function displayMovie(movie){
    movieArray.push(movie);
    var $poster = $('<div>');
    var $title = $('<div>');
    var $description = $('<div>');
    var $footer = $('<div>');
    var $remove = $('<a>');
    var $edit = $('<a>');

    $poster.addClass('poster');
    $poster.attr('data-id', movie._id);
    var url = 'url("'+movie.poster+'")';
    $poster.css('background-image', url);

    $title.addClass('title');
    $title.text(movie.name);

    $remove.addClass('remove');
    $remove.text('X');

    $edit.addClass('edit');
    $edit.text('edit');

    var about = 'A film by <span class="studio">'+movie.studio+'</span> staring <span class="actors">'+movie.actors.join(', ')+'</span>';
    $description.addClass('description');
    $description.append(about);

    $footer.addClass('footer');
    $footer.text(movie.director + ' ' + movie.year + ' ' + movie.rating + ' ' + movie.length);
   
    $footer.append($edit, $remove);
    $poster.append($title, $description, $footer);
    $('#movies').prepend($poster);
  }

  function toggleForm(){
    $('#movie').toggleClass('hide');
  }

  function submitMovie(event){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function newMovie(movie){
    $('#movie input').val('');
    displayMovie(movie);
  }

})();

