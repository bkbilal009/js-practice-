function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("A");
    console.log("D");
}
// sayMyName  This is just referal 

// sayMyName()

// function AddTwoNumbers(number1 , number2){ // Parameters 
    // console.log(number1 + number2);
// }
// AddTwoNumbers(3,4) // Arguments
// AddTwoNumbers(3,"4")

function AddTwoNumbers(number1 , number2){ // Parameters 
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = AddTwoNumbers(3,5)

// console.log("Results: ",result);


function loginUserMessage(username){
    return '${username} just logged in'
}

// console.log(loginUserMessage("Muhammad Bilal"));



// function CalculateCartPrice(...num1){ //      (...) => this is also called spread and rest operator 
//     return num1
// }

// console.log(CalculateCartPrice(200,400,500));


function CalculateCartPrice(val1,val2,...num1){ //      (...) => this is also called spread and rest operator 
    return num1
}

// console.log(CalculateCartPrice(200,400,500,700));

const user = {
    username : "Muhammad Bilal",
    prices : 999
}
function handleObject(anyobject){
    // console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
    
}

// handleObject(user)

handleObject({
    username : "Muhammad Bilal",
    price : 899
})


const newArray = [100,200,300]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,900,300,400,500]));
