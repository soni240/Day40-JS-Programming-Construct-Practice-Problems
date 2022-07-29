// JavaScript source code

// => Generate 2 Digit 5 random numbers and get min and max no

let ArrayOfRanNo = [];
let numcount = 0;
//generates random no btw 10 -99
for (var i = 0; i <5; i++) {
    numcount++;
    let x = Math.floor(Math.random() * (1000 - 100 + 1) + 100); //generate random numbers in range of 100-999
    console.log("Num " + numcount + " = " + x);
    ArrayOfRanNo[i] = x;
}

console.log(">> Max Number  :- " ,Math.max.apply(null, ArrayOfRanNo));  // Display Max No
console.log(">> Min Number :- ", Math.min.apply(null, ArrayOfRanNo));   // Display Min No

