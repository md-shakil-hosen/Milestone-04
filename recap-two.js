// Recap Two
var time = '10:20PM'; /*String Type*/
var BookPrice = 150; /*Number type*/
var IsWhiteColor = false; /* Boolean Type */

// Array 
var partners = ['Rakibul Islam', 'Alex', 'Mark'];
var ElementsCount = partners.length;
var AlexIndex = partners.indexOf('Alex');
console.log(AlexIndex);

// Conditional 
var BookPrice = 100;
if (BookPrice < 120) {
    console.log('I Will Bye the book');
}
else {
    console.log('I not bye the book');
}

// While Loop
var i = 0;
while (i <= 17) {
    console.log('I will take it');
    i++;
}
// For Loop
for (var i = 0; i <= 17; i++) {
    console.log('ok');
}

// Function 
function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var MoonStratus = isMoonUp(20);

// Value of variable could change 
let Price = 399;
Price = 50;
Price = 30;
console.log(Price);

// Value of the Variable will not change 
const MyName = 'Md. Shakil Mahmud';
console.log(MyName);
MyName = 22; /* Not Changeable Value */