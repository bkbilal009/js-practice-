// Dates 

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));

let myCreateDates = new Date(2026, 0, 23)
console.log(myCreateDates);
console.log(myCreateDates.toDateString());


let myCreateDates = new Date(2026, 0, 23, 2, 3)
console.log(myCreateDates.toLocaleDateString());
console.log(myCreateDates.toLocaleString());

let myCreateDates = new Date("2026-01-23") // From year 
let myCreateDates = new Date("02-14-2026") // Form Month 
console.log(myCreateDates.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDates.getTime());

console.log(Date.now());
console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getTime());
console.log(newDate.getDay());


// `${newDate} and the time is ......`

newDate.toLocaleString(`default`{
    weekday: "long",
   
})