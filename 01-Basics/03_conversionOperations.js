/* Toady topic agenda 
 What is Conversion operations */

 let score = 33
 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score) // typecasting
 console.log(valueInNumber);

 let score = "33abc"
 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 let score = null
 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);
 

 let score = undefined
 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 let score = undefined
 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);
 
 
//  NaN => Not a number
//  "33" => 33
//  "33abc" => NaN
//  True => 1
//  False => 0

 let isLoggedIn = 1
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

 let isLoggedIn = ""
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

 let isLoggedIn = "Bilal"
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);


 1 => True
 0 => False
 "Bilal" => True
 



 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof(stringNumber));
 
 