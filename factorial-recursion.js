// Factorial Recursion

function Factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * Factorial(n - 1);
}

const MyFactorial = Factorial(7);
console.log(MyFactorial);

// Some Understand 