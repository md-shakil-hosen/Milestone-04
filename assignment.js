/* Assignment -4 */

// Problem -1 | seerToMon Convert 

/*========= Function =========*/
function seerToMon(seer) {
    if (seer < 0) {
        return 'Your input is not Valid'; /*Error Massage*/
    }
    if (typeof seer != 'number') {
        return 'Your input is not Valid'; /*Error Massage*/
    }
    var mon = seer / 40;  /* Calculation: 40KG= 1 Mon */
    return mon; /* value Return */
}
/*--------  Input Value --------- */
var getMon = seerToMon(40);
console.log(getMon);

// Problem -2 | totalSales  Calculation
/*========= Function =========*/
function totalSales(t_ShirtQuantity, pantQuantity, shoeQuantity) { /*Parameter*/
    if (t_ShirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Your input is not Valid'; /*Error Massage*/
    }
    if (typeof t_ShirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return 'Your input is not Valid';   /*Error Massage*/
    }
    const PertShirtPrice = 100;
    const PerPantPrice = 200;
    const PerShoePrice = 500;

    // Seals Calculation
    const tShirtPiceQuantity = PertShirtPrice * t_ShirtQuantity;
    const pantPiceQuantity = PerPantPrice * pantQuantity;
    const shoePiceQuantity = PerShoePrice * shoeQuantity;

    // adding All Seals Quantity 
    const totalPrice = tShirtPiceQuantity + pantPiceQuantity + shoePiceQuantity;
    return totalPrice;
}

/*--------  Input Value --------- */
const ProductQuantity = totalSales(1, 1, 1); /*Calculate Per Pice Price*/
console.log(ProductQuantity);



// Problem -3 | deliveryCost Calculation 
/*========= Function =========*/

function deliveryCost(t_ShirtQuantity) {
    if (t_ShirtQuantity < 0) {
        return 'Your input is not Valid'; /*Error Massage*/
    }
    if (typeof t_ShirtQuantity != 'number') {
        return 'Your input is not Valid'; /*Error Massage*/
    }
    const deliveryCostFirst100pice = 100;
    const deliveryCostSecond100pice = 80;
    const deliveryCostRestPice = 50;
    if (t_ShirtQuantity <= 100) {
        const count = t_ShirtQuantity * deliveryCostFirst100pice;
        return count;
    }
    else if (t_ShirtQuantity <= 200) {
        const First100Pice = 100 * deliveryCostFirst100pice;
        const restCost = t_ShirtQuantity - 100;
        const Second100Pice = restCost * deliveryCostSecond100pice;
        const TotalCost = First100Pice + Second100Pice;
        return TotalCost;
    }

    else {
        const First100Pice = 100 * deliveryCostFirst100pice;
        const Second100Pice = 100 * deliveryCostSecond100pice;
        const restCost = t_ShirtQuantity - 200;
        const RestPice = restCost * deliveryCostRestPice;
        const TotalCost = First100Pice + Second100Pice + RestPice;
        return TotalCost;

    }
}
/*--------  Input Value --------- */
const Delivery = deliveryCost(201);
console.log(Delivery);


// Problem -4 | perfectFriend
/*========= Function =========*/
function perfectFriend(friendName) {
    let largest = '';
    for (let i = 0; i < friendName.length; i++) {
        if (typeof largest != 'string') {
            return 'Your input is not Valid'; /*Error Massage*/
        }
        if (friendName[i].length == 5) {
            largest = friendName[i];
        }

    }
    return largest;
}

/*--------  Input Value --------- */
const Friends = ['Abir', 'Roky', 'Jony', 'Mahsan', 'Rakib'];
const largestName = perfectFriend(Friends);
console.log(largestName);