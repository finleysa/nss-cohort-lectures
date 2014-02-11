function add(x, y){
  return x+y;}

function sum(array){
  var j=0;
  for(var i=0; i<array.length; i++){
    j+=array[i];
  }
  return j;
}

function countEvens(array){
  var j=0;
  for(var i=0; i<array.length; i++){
    if(array[i] % 2 ===0)
      j++
  }
  return j;
}

function makeEvenStringsUppercase(array){
  for(var i=0; i<array.length; i++){
    if(array[i].length % 2 === 0){
      array[i] = array[i].toUpperCase();
    }
  }
  return array;
}

function sumLengthOfStrings(strings){
  counter = 0;
  for(i=0; i<strings.length; i++)
    if (strings.charAt(i) != " ")
      counter++;
  
    return counter;
}

function makeCatWithName(catName){
  var cat = { name: catName};
  return cat;
}
