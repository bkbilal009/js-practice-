const name = "Muhammad Bilal "
const repoCount = 50 

console.log(name + repoCount + " Value");

Placeholder 
console.log(`My name is ${name} and my repo is ${repoCount}`); // use backtrace 


const gameName = new String("Muhammad Bilal")

console.log(gaemName[0]);
console.log(gaemName.__proto__);

console.log(gaemName.length);
console.log(gaemName.toUpperCase());

console.log(gaemName.charAt(6)); // Passing no to find in whcih position is lie 
console.log(gaemName.indexOf("l"));

const newString = gaemName.substring(2,8);  // slice the words 
console.log(newString)

const anotherString = gameName.slice(-5, 4); // slice form backword 
console.log(anotherString);


const newStringOne = "      Bilal"
console.log(newStringOne);
console.log(newStringOne.trim());

const URL = "https://.google.com"
console.log(URL.replace("google" , "youtube"));

console.log(URL.includes("google"));
console.log(URL.includes("youtube"));


console.log(gameName.split("_"));
