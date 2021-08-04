// Odd and Even Number
function inEvenNumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = inEvenNumber(myNumber);
console.log(isMyNumberEven);