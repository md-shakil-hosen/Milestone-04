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
// console.log(uniqueNames);


// Remove Duplicate Number 

const RollNumbers = ['20', '25', '56', '89', '90', '47', '23', '56', '20', '20', '90', '23'];
function removeDuplicateNumber(RollNumbers) {
    const uniqueNumbers = [];
    for (const element of RollNumbers) {
        if (uniqueNumbers.indexOf(element) == -1) {
            uniqueNumbers.push(element);
        }

    }
    return uniqueNumbers;

}

const NumberOfRoll = removeDuplicateNumber(RollNumbers);
console.log(NumberOfRoll);