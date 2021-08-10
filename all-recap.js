let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);

/*--------  Input Your Value --------- */
// const Products = [
//     { Name: 'Lotto Brand tShirt', Price: 100 },
//     { Name: 'Lotto Brand Pant', Price: 200 },
//     { Name: 'Lotto Brand Shows', Price: 500 },
// ];

// let TotalPrice = 0;
// for (const Product of Products) {
//     TotalPrice = TotalPrice + Product.Price;
// }
// console.log(TotalPrice);

// Problem -3 | deliveryCost

function deliveryCost(tShirtQuantity) {
    const FirstDeliveryCharge = 100;
    const SecondDeliveryCharge = 80;
    const RestDeliveryCharge = 50;

    if (tShirtQuantity <= 100) {
        const count = tShirtQuantity * FirstDeliveryCharge;
        return count;
    }
    else if (tShirtQuantity <= 200) {
        const FirstDelivery = 100 * FirstDeliveryCharge;
        const restCost = tShirtQuantity - 80;
        const SecondDelivery = restCost * SecondDeliveryCharge;
        const TotalCost = FirstDelivery + SecondDelivery;
        return TotalCost;
    }
    else {
        const FirstDelivery = 100 * FirstDeliveryCharge;
        const SecondDelivery = 80 * SecondDeliveryCharge;

        const restCost = tShirtQuantity - 50;
        const restDelivery = restCost * RestDeliveryCharge;
        const TotalCost = FirstDelivery + SecondDelivery + restDelivery;
        return TotalCost;
    }
}
/*--------  Input Your Value --------- */
const ProductsDelivery = deliveryCost(201);
console.log(ProductsDelivery);