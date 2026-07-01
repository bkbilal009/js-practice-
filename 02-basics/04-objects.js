const tinderUser = new Object() // singelton objects
const tinderUser = {} // non singleton objects
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Muhammad Bilal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "muhammadbilalbluch@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Muhammad",
            lastname : "Bilal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a", 2: "b",3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj4 = {7: "g", 8: "h", 9: "i"}

const obj3 = {obj1 , obj2}

const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);



const user = [
    {

    },
    {
        id : "124abc"
    },
    {
        // id = "234bccs";
        email : "h@gmail.com"
    }
]

// access the element 

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const course = {
    coursename : "JS practice",
    price: "9999",
    courceInctructor : "Muhammad Bilal"
}

// course.courceInctructor

const {courceInctructor: instructor} = course 
// console.log(courceInctructor);
console.log(instructor); // just call instructor no write a big name 

const navbar = () => {
                                         destructure the object 
}
navbar(company = "Muhammad Bilal")



// API concept 


// JSON
{
    "Name":"Muhammad Bilal",
    "Courcename": "JS in hindi",
    "Price":"free"
}

[
    {},
    {},
    {}
]




