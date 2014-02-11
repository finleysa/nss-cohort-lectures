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
  var p=[];
  var temp = "";
  for(var i=0; i<array.length; i++){
    var j=array[i].length;
    
    if(j % 2 === 0){
      temp = array[i].toUpperCase();
      p.push(temp);
    }else{
    temp = array[i];
    p.push(temp);
    }
  }
  return p;
}

function makeCatWithName(catName){
}
