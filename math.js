// Convert Negative Number To Positive Number

const myNumber = -5;
const output = Math.abs(myNumber);
// console.log(output);

// Ceil 
const myNumbers = 21.8765;
const outputCeil = Math.ceil(myNumbers);
console.log(outputCeil);

// Floor 
const YourNumber = 45.445;
const outputFloor = Math.floor(YourNumber);
console.log(outputFloor);

// Rounded 

const trackNumber = 21.95;
const trackOutput = Math.round(trackNumber);
console.log(trackOutput);

// Random Number 

const outputRandom = Math.random() * 10;
const randomRounded = Math.floor(outputRandom);
console.log(randomRounded);

// For Loop Math. Rounded . Floor . Ceil . Random 
for (let i = 0; i <= 30; i++) {
    const outputRandom = Math.random() * 10;
    const randomRounded = Math.floor(outputRandom);
    console.log(randomRounded);
}