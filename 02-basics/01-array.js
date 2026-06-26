//  Array

const myArr = [1,2,3,4,5]
const myHeros = ["Muhammad ",["Bilal"]]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);

// Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9) // insert in just start || you can use anyone number what you want you can use
// myArr.shift() // remove value from start



// console.log(myArr.includes(9)) // find number and output show in boolean true / false
// console.log(myArr.indexOf(13)); // if value is not exist then output show in -1
// console.log(myArr.indexOf(3));


// const newArray = myArr.join()
// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray);

// slice , splice

// slice exclude last value 
// splice include last value 

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
