// JavaScript source code

// => Using Random Function Generating One Digit no

function getRandomInt(num) {
    return Math.floor(Math.random() * 10) % num;
    //or return Math.floor(Math.random() *num) ;
}

console.log(">> Output1 :- "+getRandomInt(2));
// expected output: 0 or 1

console.log(">> Output2 :- "+getRandomInt(1));
// expected output: 0

console.log(">> Output3 :- "+Math.random());
// expected output: a number from 0 to <1

