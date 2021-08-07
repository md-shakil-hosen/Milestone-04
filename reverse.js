// Reverse String

const greetings = 'Hello, How are you?';
function ReverseString(text) {
    let Reverse = '';
    for (const letter of text) {
        console.log(letter);
        Reverse = letter + Reverse;
    }
}
const Reversed = ReverseString(greetings);
console.log(Reversed);