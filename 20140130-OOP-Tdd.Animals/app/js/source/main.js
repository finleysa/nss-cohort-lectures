/* jshint camelcase:false */
/* global Animal: false, animalFactory: false */

(function(){
  'use strict';

  $(document).ready(initialize);
  
  var animals= [];

  function initialize(){
    $('input, textarea').focusin(focusInput);
    $('input, textarea').blur(blurInput);
    $('#add-photo').click(addPhoto);
    $('#add-animal').click(addAnimal);

    animals = animalFactory();
    addToTable();
  }
  
  function addToTable(){
    for(var i=0; i<animals.length; i++){
      var $tbody = $('#grid');
      // first make table row
      var $tr = $('<tr>');
      $tr.attr('id','num'+i);
      //append tbody with row
      $tbody.append($tr);
      
      var $td1 = $('<td>');
      $td1.text(animals[i].name);

      var $td2 = $('<td>');
      var $a2 = $('<a>');
      $a2.attr('href','#');
      $a2.attr('data-search', 'species');
      $a2.attr('data-value', animals[i].species);
      $a2.text(animals[i].species);

      var $td3 = $('<td>');
      var $a3 = $('<a>');
      $a3.attr('href','#');
      $a3.attr('data-search', 'age');
      $a3.attr('data-value', animals[i].age);
      $a3.text(animals[i].age);

      var $td4 = $('<td>');
      var $a4 = $('<a>');
      $a4.attr('href','#');
      $a4.attr('data-search', 'gender');
      $a4.attr('data-value', animals[i].gender);
      $a4.text(animals[i].gender);

      var $td5 = $('<td>');
      var $a5 = $('<a>');
      $a5.attr('href','#');
      $a5.attr('data-search', 'age');
      $a5.attr('data-value', animals[i].color);
      $a5.text(animals[i].color);

      var $td6 = $('<td>');
      $td6.text(animals[i].description);
      
      var $td7 = $('<td>');
      $tr.append($td7);
      console.log(animals[i].photo.length);
      for(var k=0; k< animals[i].photo.length; k++){
        var $div = $('<div>');
        $div.css('background-image', animals[i].photo[k]);
        $div.addClass('smallimg');
        $td7.append($div);
      }
      $tr.prepend($td1, $td2, $td3, $td4, $td5, $td6);
      $td2.prepend($a2);
      $td3.prepend($a3);
      $td4.prepend($a4);
      $td5.prepend($a5);
    }
  }

  function addAnimal(event){
    event.preventDefault();
    var name = $('#name').val();
    var species = $('#species').val();
    var age= $('#age').val() * 1;
    var gender = $('#gender').val();
    var color = $('#color').val();
    var description = $('#description').val();
    var animalPhotos = getAnimalPhotos();
    
    var animal = new Animal(name,species,age,gender,color,animalPhotos,description);
    animals = [];
    animals.push(animal);
    addToTable();
    event.preventDefault();
  }

  function getAnimalPhotos(){
    var photoUrl = [];
    for(var i=1; i <= $('#photos div').length; i++)
    {
      photoUrl[i-1] = $('#photos div:nth-child('+i+')').css('background-image');
    }
    return photoUrl;
  }
  
  function addPhoto(event){
    var url = $('#photo').val();
    var $div = $('<div>');
    $div.css('background-image', 'url('+url+')');
    $div.addClass('box');
    $('#photos').prepend($div);
    $('#photo').val('');
    event.preventDefault();
  }

  function focusInput(){
    $(this).css('background-color', 'lavender');
  }

  function blurInput(){
    $(this).css('background-color', 'white');
  }

})();
