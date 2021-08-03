// Parameter
function BringSingara(taka) {
    console.log('Singarar Jonno dise', taka, 'taka');
    console.log('Mama Singara Dan');
    var SingaraPrice = 10;
    var SingaraQuantity = taka / SingaraPrice;
    return SingaraQuantity;
}
var money = 250;
var Singara = BringSingara(money);
console.log('Ai Nen Singara', Singara);

// Second Practice

function WhatDateToday(date) {
    console.log('Today Date is', date);
    console.log('Please, Talk Me Today Date');
    var DateIs = 4;
    var DateDayes = date / DateIs;
    return DateDayes;

}
var Month = 30;
var TodayDate = WhatDateToday(Month);
console.log('Today Date Is', TodayDate);