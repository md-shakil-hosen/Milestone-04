// Break Continue
// var i = 1;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }
// // i++  This always Continue

// // For Loop
// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
// }

// break For Array 
var numbers = [25, 28, 77, 96, 85, 56, 21, 232, 87,];
for (var i = 1; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number < 100) {
        break;

    }
}