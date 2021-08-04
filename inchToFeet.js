// Inch To Feet Convert
var Inches = 300;
var feet = Inches / 12; /*12 Inch = 1 Feet*/
console.log(feet);

// Function 
function InchToFeet(Inches) {
    var feet = Inches / 12;
    return feet;
}

// Mile to Km Convert 
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var Marathon = mileToKilometer(226);
console.log('Marathon in km:', Marathon);