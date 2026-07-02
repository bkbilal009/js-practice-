//  For of loop

// [" "," "," "]
// [{ },{ },{ }]





// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }






// const greetings = "Hello World!"

// for (const greets of greetings) {
//     console.log(`Each char is :  ${greets}`);
    
// }


// Maps => Map print just unique value print just one time it can't repeat the value 



const map = new Map()
map.set('PK',"Pakistan")
map.set('USA',"United State of America")
map.set('FR',"France")
map.set('USA',"United State of America")

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}


// for (const {key , value} of myObject) {
//     console.log(key, ':-', value);
    
// }


