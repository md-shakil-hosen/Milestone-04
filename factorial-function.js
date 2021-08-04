// Factorial Function
let Factorial = 1; /*Factorial Value always Start 1 */
for (let i = 1; i <= 5; i++) {
    Factorial = Factorial * i;
}
console.log(Factorial);

// Unlimited Factorial 
function GetFactorial(number) {
    let Factorial = 1;
    for (let i = 1; i <= number; i++) {
        Factorial = Factorial * i;
    }
    return Factorial;
}

var FirstFactorial = GetFactorial(5);
console.log('20 Factorial is', FirstFactorial);