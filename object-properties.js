// Object Properties
var Computer = {
    Price: 34500,
    Storage: '256GGB',
    Color: 'Black',
    Processor: 'Intel i3'
};
console.log(Computer);
console.log(Computer.Color); /*Check Object Properties*/

// Change Computer Value
var ComputerPrice = Computer.Price;
console.log(ComputerPrice);
Computer.Price = 40000;
console.log(Computer);

// Change Color
var ComputerColor = Computer.Color;
Computer.Color = 'Gray';
console.log(Computer);