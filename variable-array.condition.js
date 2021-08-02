// Variable 
var BottleColor = "Red"; /*String Type variable*/
var CowQuantity = 8; /* Integer Type Variable */
var BottleIsFull = true; /* Boolean Type  Variable*/

// Array 
var items = ["JavaScript", "Python", "PHP", "Java", "C++", "C#", "Ruby", "Node.js"]; /*Variable Elements*/
var index = items.indexOf("PHP"); /*Index of Elements*/
console.log(index);
items.push("MySQL");
items.pop();

// Conditional if, if else, else 
if (items.length <= 4) {
    console.log('Ok, All Right');
}
if (items.length >= 4) {
    console.log("All Right");
}
else {
    console.log("Now");
}


