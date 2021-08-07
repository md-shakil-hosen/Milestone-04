// Total Price
const Products = [
    { Name: 'Laptop', Price: 45000 },
    { Name: 'shirt', Price: 500 },
    { Name: 'Watch', Price: 1000 },
    { Name: 'iphone 12 pro', Price: 145000 },
];
let totalPrice = 0; //Dutiful =0
for (let Product of Products) {
    totalPrice = totalPrice + Product.Price;
}
// console.log(totalPrice);

// Success the calculation
const cart = [
    { Name: 'Laptop', Price: 45000, Quantity: 2 },
    { Name: 'shirt', Price: 500, Quantity: 5 },
    { Name: 'Watch', Price: 1000, Quantity: 2 },
    { Name: 'iphone 12 pro', Price: 145000, Quantity: 5 },
];
let CartTotal = 0;
for (const Product of cart) {
    console.log(Product);
    const ProductTotal = Product.Price * Product.Quantity;
    CartTotal = CartTotal + ProductTotal;
}
// console.log(CartTotal);

