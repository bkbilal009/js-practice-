// ===============================================
// JavaScript Date Object
// ===============================================

// Create a Date object with the current date and time
let myDate = new Date();

console.log(myDate);
// Output (Example):
// 2026-08-01T14:05:30.123Z

console.log(myDate.toString());
// Output:
// Sat Aug 01 2026 19:05:30 GMT+0500 (Pakistan Standard Time)

console.log(myDate.toISOString());
// Output:
// 2026-08-01T14:05:30.123Z

console.log(myDate.toJSON());
// Output:
// 2026-08-01T14:05:30.123Z

console.log(myDate.toLocaleDateString());
// Output:
// 8/1/2026

console.log(myDate.toLocaleString());
// Output:
// 8/1/2026, 7:05:30 PM

console.log(typeof myDate);
// Output:
// object



// ===============================================
// Create a Custom Date
// ===============================================

// Months are ZERO indexed.
// January = 0
// February = 1
// March = 2
// ...

let myCreateDate = new Date(2026, 0, 23);

console.log(myCreateDate);
// Output (UTC Representation):
// 2026-01-22T19:00:00.000Z

console.log(myCreateDate.toDateString());
// Output:
// Fri Jan 23 2026



// ===============================================
// Create Date with Time
// ===============================================

let myCreateDateWithTime = new Date(2026, 0, 23, 2, 3);

console.log(myCreateDateWithTime.toLocaleDateString());
// Output:
// 1/23/2026

console.log(myCreateDateWithTime.toLocaleString());
// Output:
// 1/23/2026, 2:03:00 AM



// ===============================================
// Create Date from String (YYYY-MM-DD)
// ===============================================

let dateFromYear = new Date("2026-01-23");

console.log(dateFromYear.toLocaleString());
// Output (may vary by timezone):
// 1/23/2026, 5:00:00 AM



// ===============================================
// Create Date from String (MM-DD-YYYY)
// ===============================================

let dateFromMonth = new Date("02-14-2026");

console.log(dateFromMonth.toLocaleString());
// Output:
// 2/14/2026, 12:00:00 AM



// ===============================================
// Timestamp
// ===============================================

// Current timestamp in milliseconds
let myTimeStamp = Date.now();

console.log(myTimeStamp);
// Output (Example):
// 1785593130123

console.log(dateFromMonth.getTime());
// Output (Example):
// 1771023600000

console.log(Date.now());
// Output (Example):
// 1785593130123

console.log(Date.now() / 1000);
// Output (Example):
// 1785593130.123

console.log(Math.floor(Date.now() / 1000));
// Output:
// 1785593130



// ===============================================
// Get Individual Date Information
// ===============================================

let newDate = new Date();

console.log(newDate);
// Output (Example):
// 2026-08-01T14:05:30.123Z

console.log(newDate.getMonth());
// Output:
// 7
//
// Month Index:
// Jan = 0
// Feb = 1
// Mar = 2
// Apr = 3
// May = 4
// Jun = 5
// Jul = 6
// Aug = 7

console.log(newDate.getTime());
// Output (Example):
// 1785593130123

console.log(newDate.getDay());
// Output:
// 6
//
// Day Index:
// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6



// ===============================================
// Custom Formatting
// ===============================================

// Show only the weekday name
console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
    })
);
// Output:
// Saturday



// ===============================================
// Template Literal Example
// ===============================================

console.log(
    `Today is ${newDate.toDateString()} and the time is ${newDate.toLocaleTimeString()}`
);
// Output (Example):
// Today is Sat Aug 01 2026 and the time is 7:05:30 PM
