//https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
//number 4

const one = [0,1,-2];
const two = [0.5,1,1.5];

const add = (a, b) => a + b
const sumone = one.reduce(add);
const sumtwo = two.reduce(add);

console.log(sumone);
console.log(sumtwo);
