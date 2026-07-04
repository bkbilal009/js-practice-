// 1. HOISTING DEMO


try {
    // The variable declaration is hoisted to the top, so it prints 'undefined' instead of crashing.
    console.log(hoistedVar); 
} catch(e) { 
    console.log(e); 
}
var hoistedVar = "I am hoisted!";


// 2. SCOPE & CLOSURE (Demo 1 Logic)

function createCounter() {
    // 'count' is defined in the outer function's scope (Lexical Scope)
    // It is protected and cannot be accessed directly from the outside.
    let count = 0; 

    // The inner function creates a Closure by remembering and accessing the 'count' variable.
    return function() {
        count++; 
        return count;
    };
}

// Initializing the closure instance
const updateCounter = createCounter(); 

// DOM Manipulation & Event Handling for Demo 1
const counterValueEl = document.getElementById('counterValue');
const incrementBtnEl = document.getElementById('incrementBtn');

// Adding a click event listener
incrementBtnEl.addEventListener('click', function() {
    const newCount = updateCounter(); // Calling the closure function
    counterValueEl.innerText = `Count: ${newCount}`; // Updating the DOM dynamically
});



// 3. PROMISES & ASYNCHRONOUS JS (Demo 2 Logic)

// Simulating an Asynchronous API call using a Promise
function fakeFetchQuote() {
    return new Promise((resolve, reject) => {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not final, failure is not fatal. - Winston Churchill",
            "Be yourself; everyone else is already taken. - Oscar Wilde",
            "Coding is the language of the future. - Anonymous"
        ];
        
        // Simulating a 1-second network delay using setTimeout
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            // Resolving the promise successfully with a random quote
            resolve(quotes[randomIndex]); 
        }, 1000);
    });
}

// DOM Manipulation & Event Handling for Demo 2
const fetchBtnEl = document.getElementById('fetchBtn');
const quoteDisplayEl = document.getElementById('quoteDisplay');


// Adding a click event listener for the quote fetcher


fetchBtnEl.addEventListener('click', function() {
    // Updating the DOM to show a loading state while the promise processes
    quoteDisplayEl.innerText = "Loading quote via Promise...";
    
    // Consuming the Promise using .then() and .catch()
    fakeFetchQuote()
        .then((quote) => {
            // Executed if the promise resolves successfully
            quoteDisplayEl.innerText = quote; 
        })
        .catch((error) => {
            // Executed if the promise encounters an error
            quoteDisplayEl.innerText = "Oops! Something went wrong.";
        });
});
