// JavaScript source code

// => Add Two Randomly generated nums and return result

function GetAdditionOfRanNum() {
    let x = Math.floor(Math.random()* 11); //Gen Random no between 0-10 
    console.log("Num1 :- " + x);     
    let y = Math.floor(Math.random() * 11); //Gen Random no between 0-10
    console.log("Num2 :- " + y);
    return x + y;   //return addition of x and y
}

console.log(">> Addition of Num1 and Num2:- " + GetAdditionOfRanNum()); //print addition to console