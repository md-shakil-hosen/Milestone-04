// Check Leap Year
function isLeapYear(Year) {
    if (Year % 4 == 0) {
        return true;
    }
    return false;
}

const myYear = 2087;
const ismyYearLeapYear = isLeapYear(myYear);
console.log('Is may leap year :', ismyYearLeapYear);

// Calculate factorial of a number use loop
