// Recap Array, Condition, Loop
var favoriteBook = '12 Hours Work Week';
var BookList = ['Math', 'Physics', 'Biology', 'Computer', 'Web Development']; /*Array*/
var ComputerIndex = BookList.indexOf('Computer'); /*Check Position Of Array Element*/
BookList[0] = 'Chemistry'; /* Change Array Element */
BookList.push('Full Stack Development');
BookList.pop();

// Conditional   = if , else , if-else 
if (BookList[1] == 'Physics') {  /*Book list er Modhe 1 number position a Physics name asy ki nah */
    console.log('Yes, Physics Book');
}
else {
    console.log('This is another Book');
}

// While loop 
var i = 0;   /*Variable loop*/
while (i < 5) {
    console.log('Looping Looping looping');
    i++;
}

// For Loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}