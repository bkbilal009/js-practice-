// =======================================
// JavaScript Date Object
// =======================================

// Create a Date object containing the current date and time
let myDate = new Date();

// Print the complete Date object
console.log(myDate);

// Convert Date into a readable string
console.log(myDate.toString());

// Convert Date into ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(myDate.toISOString());

// Convert Date into JSON format
// Mostly used when sending data to APIs
console.log(myDate.toJSON());

// Print only the date according to the local system
console.log(myDate.toLocaleDateString());

// Print both date and time according to the local system
console.log(myDate.toLocaleString());

// Check the data type
// Output: object
console.log(typeof myDate);



// =======================================
// Creating Custom Dates
// =======================================

// Months are ZERO indexed
// January = 0
// February = 1
// March = 2
// ...
let myCreateDate = new Date(2026, 0, 23);

console.log(myCreateDate);
console.log(myCreateDate.toDateString());



// Create a date with time
// Year, Month, Day, Hour, Minute
let myCreateDateWithTime = new Date(2026, 0, 23, 2, 3);

console.log(myCreateDateWithTime.toLocaleDateString());
console.log(myCreateDateWithTime.toLocaleString());



// =======================================
// Creating Date from Strings
// =======================================

// Format: YYYY-MM-DD
let dateFromYear = new Date("2026-01-23");

// Format: MM-DD-YYYY
let dateFromMonth = new Date("02-14-2026");

console.log(dateFromMonth.toLocaleString());



// =======================================
// Timestamp
// =======================================

// Returns current timestamp in milliseconds
let myTimeStamp = Date.now();

console.log(myTimeStamp);

// Timestamp of our custom date
console.log(dateFromMonth.getTime());

// Current timestamp
console.log(Date.now());

// Convert milliseconds to seconds
console.log(Date.now() / 1000);

// Remove decimal values
console.log(Math.floor(Date.now() / 1000));



// =======================================
// Getting Individual Date Values
// =======================================

let newDate = new Date();

console.log(newDate);

// Month (0-11)
console.log(newDate.getMonth());

// Time in milliseconds since Jan 1, 1970
console.log(newDate.getTime());

// Day of the week
// Sunday = 0
// Monday = 1
// ...
console.log(newDate.getDay());



// =======================================
// Custom Locale Formatting
// =======================================

// Correct syntax
console.log(
    newDate.toLocaleString("default", {
        weekday: "long", // Full weekday name
    })
);

// Example Output:
// Saturday
