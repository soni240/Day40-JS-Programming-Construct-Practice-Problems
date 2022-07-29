// JavaScript source code

//=> Get Dice No Btw 1-6 using Math.random Fun

function DiceRoll(num) {
    return Math.floor(Math.random() * 10) % num; //return random generated no between 0 to num-1
}

console.log(">> Dice Output :- " + DiceRoll(7));  //prints the Random gen Dice no

