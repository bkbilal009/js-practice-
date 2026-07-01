const user = {
    username : "Muhammad Bilal",
    price : 999,
    welcomeMessage: function(){
        console.log('${this.username}, welcome to webiste');
        console.log(this);
        
    }
}

user.welcomeMessage()

user.username = "Bluch"
user.welcomeMessage()

console.log(this);


function chai(){
    let username = "Muhammad Bilal"
    console.log(this);
    
}
chai()


// Declare the function through Arrows funciton 

const chai = function (){
    let username = "Muhammad Bilal"
    console.log(this.username);
    
}
chai()

const chai = () => {
    let username = "Muhammad Bilal"
    console.log(this.username);
    
}
chai()

const chai = () => {
    let username = "Muhammad Bilal"
    console.log(this);
    
}
chai()


// if you use explexit then you are must use return statements

const addTwo = (num1,num2) => {
    return num1 + num2
}


//  if you want to use Implicit return then you can't use return statements


const addTwo = (num1,num2) => num1 + num2



const addTwo = (num1,num2) => (num1 + num2)



const addTwo = (num1,num2) => {username = "Muhammad Bilal"} // undefined 

const addTwo = (num1,num2) => ({username : "Muhammad Bilal"})
console.log(addTwo(3,4))


const myArray = [2,3,4,5,6]
myArray.forEach()
