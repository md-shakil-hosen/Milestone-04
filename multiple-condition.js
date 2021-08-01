// Multiple Condition
var GotJob = true;
var monySaved = 300000;

if (GotJob == true && monySaved < 250000) { /* Problem == Compare */
    console.log('You Can got Married ');
}
else {
    console.log('You loss , You Can not got Married');
}
// Multiple Condition , Or and &&
var GotJob = true;
var monySaved = 300000;
if (GotJob == true || monySaved > 250000) {
    console.log('You Can got Married');
}

else {
    console.log('You can not go Married');
}

// Condition 4th
var gotJob = false;
var monySaved = 50000;
var hasHouse = true;

if ((gotJob == true && monySaved > 200000) || hasHouse == true) {
    console.log('Yes You can go London');
}
else {
    console.log('You can not go London');
}

