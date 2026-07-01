var c = 300
var a = 400

// {} ==> This is also called scope
if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER IS : ",a);
    
}

// console.log(a);
// // console.log(b);
// console.log(c);  // this is defined bcz I use variable datatype var



// ++++++++++++++++++++++++++++++++++++++++++ (NESTED SCOPE) ++++++++++++++++++++++++++++++++++++++++++++++++++++



function one(){
    const username = "Muhammad Bilal"

    function two(){
        const website = "YouTube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true){
    const username = "Muhammad Bilal"

    if (username === "Muhammad Bilal"){
        const webiste = "Youtube"

        // console.log(username + website);
        
    }
}




//  ++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++


function addOne(num){
    return num + 1
}
console.log(addOne(5));

const addTwo = function(num){ // addTwo is also called expression
    return num + 2
}

addTwo(7)
