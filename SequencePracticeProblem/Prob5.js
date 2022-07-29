// JavaScript source code

// => A.Unit conversion

let ValueInInch = 42;
let LengthOfPlot = 60;
let WidthOfPlot = 40;

function InchTOFeet() {
    return ValueInInch / 12;
}

console.log(">> Conversion of 42 inch to feet = " + InchTOFeet() + " feet");
console.log(">> Rectangular Plot : 60 ft * 40 ft = " + LengthOfPlot * 0.3048 + " m * " + WidthOfPlot * 0.3048+" m");



