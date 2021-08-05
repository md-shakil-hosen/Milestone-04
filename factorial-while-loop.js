// // Factorial While Loop
// function getFactorial(number) {
//     let Factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         Factorial = Factorial * i;
//         i++;
//     }
//     return Factorial;
// }

// const MyFactorial = getFactorial(6);
// console.log(MyFactorial);

// Decrement
function getFactorial(number) {
    let Factorial = 1;
    let i = number;
    while (i >= 1) {
        Factorial = Factorial * i;
        i--;
    }
    return Factorial;
}
const MyFactorial = getFactorial(3);
console.log(MyFactorial);
console.log('Ok All Right Your Code ')
