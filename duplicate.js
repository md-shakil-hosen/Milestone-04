// Remove Duplicate items from an array
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'kabul', 'abul', 'dabul', 'fabul', 'abul', 'nabul'];

function removeDuplicate(names) {
    const unique = []; /* we are value in this array*/
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);

        }

    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);