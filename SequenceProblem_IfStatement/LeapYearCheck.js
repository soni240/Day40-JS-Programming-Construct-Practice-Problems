// JavaScript source code
const prompt = require("prompt-sync")();
// => check leap year

// take input
const year = prompt('Enter a year:');

function checkLeapYearOrNot(year) {

    //three conditions to find out the leap year
    if ((year % 4 == 0 ) && (year % 100 != 0) || (0 == year % 400)) {
        console.log(">> "+year + ' is a leap year');
    } else {
        console.log(">> "+year + ' is not a leap year');
    }
}

checkLeapYearOrNot(year); //function call

