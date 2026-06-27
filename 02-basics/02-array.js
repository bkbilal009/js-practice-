const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// Spread operator 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7, [4, 5]]]

const real_Another_Array = anotherArray.flat(Infinity)
console.log(real_Another_Array);

console.log(Array.isArray("Muhammad Bilal"));
console.log(Array.from("Muhammad Bilal")); // convert into array 
console.log(Array.from({name : "Muhammad Bilal"})); // empty array 

let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3));
