// singleton 
// object.create



// object literals


const mySym = Symbol("Key1")

const JsUser = {
    name : "Muhammad Bilal",
    "Full name ": "Muhammad Bilal",
    [mySym]: "myKey1",
    age : 18,
    location : "Indus society Dera ismail khan",
    email : "muhammadbilalbluch@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);


//console.log(JsUser."Full name"); // that's why i prefer to use ((console.log(JsUser["Full name "]); )) this one code 
console.log(JsUser["Full name "]);

console.log(JsUser.mySym);

// change the value or anyother things like..

JsUser.email = "bilaltag.7@gmail.com"

// lock the object anybody can't change

Object.freeze(JsUser)
JsUser.email = "bilaldev.009@gmail.com"

console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingtwo = function(){
    console.log('Hello JS user, ${this.name}');
    
}

console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());