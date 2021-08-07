// Divisible
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Foobar', i);
    }
    else if (i % 5 == 0) {
        console.log('Foo', i);
    }
    else if (i % 5 == 0) {
        console.log('Bar', i);
    }
    else {
        console.log(i);
    }
}