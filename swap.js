// Swap variable
var first = 5;
var second = 7;
console.log(first, second);

// After swap Number 
var temp = first;
first = second;
second = temp;
console.log(first, second);

// destructuring 

[first, second] = [second, first];
console.log(first, second);