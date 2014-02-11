/*
test( "deepEqual test", function() {
      deepEqual(actual, expected, "Two objects can be the same in value" );
});
*/

test( "add", function() {
      deepEqual( add(2, 3), 5, "ADDING 2 & 3" );
      deepEqual( add(2, -5), -3, "ADDING 2 & -5" );
      deepEqual( add(0, 0), 0, "ADDING 0 & 0" );
});

test ("sum", function() {
      deepEqual( sum([11,3,8]), 22, "SUM 11 3 8");
});


test ("countEvens", function() {
      deepEqual( countEvens([3,8,6,4,7]), 3, "EVEN VALUES");
});

test ("makeEvenStringsUppercase", function() {
      var actual = ['hello', 'cohort', 'iv', 'welcome', 'to', 'tdd'];
      var expected = ['hello', 'COHORT', 'IV', 'welcome', 'TO', 'tdd'];
      deepEqual( makeEvenStringsUppercase(actual), expected, "TO UPPERCASE");
});

test ("sumLengthOfStrings", function() {
  var strings = "this is a very long string";
  deepEqual(sumLengthOfStrings(strings), 21, "STRING SHOULD BE 21 CHARS");
});
test ("makeCatWithName", function() {
      deepEqual( makeCatWithName("fluffy").name, "fluffy", "CAT'S NAME SHOULD BE FLUFFY");
});
