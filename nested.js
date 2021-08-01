// Multi Stage Condition And Nested Condition
var denishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitsPrice = 10;
var myBudget = 30;

if (denishPrice < myBudget) {
    console.log('I want to Denish Milk');
}
else if (butterBreadPrice < myBudget) {
    console.log('I eat Butter bon with Tea');
}
else if (toastBiscuitsPrice < myBudget) {
    console.log('I like Biscuits');
}
else {
    console.log('Khamu Nah');
}