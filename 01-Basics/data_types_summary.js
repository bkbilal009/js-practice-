// Two types of datatypes
// 01 : Primitive 

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null 
const userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const BigNumber = 34254646546756753n


// 02 : Referance or (Non Primitive)
// Array , Objects , Functions

const Hero = ["ahmad","kashif","saqib"]

let my_name = {
    name : "Muhammad Bilal",
    age : 23,
}

const MyFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof MyFunction);
console.log(typeof Hero);



console.log(typeof BigNumber);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof userEmail);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive)--->copy|| and Heap memory(Non-Primitive)-->Referance



let myYouTubeName = "CodeWithBilal"
let anotherName = myYouTubeName

anotherName = "CSwithBilal"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "muhammadbilalbluch@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

