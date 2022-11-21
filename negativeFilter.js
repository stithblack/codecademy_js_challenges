//https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
//number 7

numList = [1,-2,3,-4,5]
numlist = jQuery.grep(numlist, function( n, i ) {
  return n >= 0;
});
console.log(numList)
