// JavaScript source code
const prompt = require("prompt-sync")(); //import package to read input from command line

console.log("[Note : Enter data in Numbers only]");
//declaring local variables and reading input for them
let date = parseInt(prompt("Enter the date :- "));  //reading input with the help of promt
let Month = parseInt(prompt("Enter the Month :- "));

//Logic for Getting Result as True or False
if (((Month >= 3 && date <= 20) && (Month <= 6 && date <= 20)) && (date < 31)) {
    console.log(">> Result :- True");
}
else {
    console.log(">> Result :- False");
}

