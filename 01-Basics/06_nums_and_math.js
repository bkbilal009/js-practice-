const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.6789
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());



//  +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));

console.log(Math.ceil(4.1)); // Choose upper value
console.log(Math.floor(4.9)); // Choose lower value 

console.log(Math.min(2,3,4,5,6,7,8,9));
console.log(Math.max(2,3,4,5,6,7,8,9));



console.log(Math.random()); // show value between 0 to 1 
console.log(Math.random()*10);

console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20 
console.log(Math.random(Math.random() * (max - min + 1)) + min)