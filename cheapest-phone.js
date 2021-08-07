// Cheapest Phone
const Phones = [
    { Name: 'Samsung S8 edg', Price: 50000, Color: 'Black', Storage: '256GB', Made: 'China' },
    { Name: 'Nokia s8', Price: 5000, Color: 'Gray', Storage: '8GB', Made: 'China' },
    { Name: 'Oppo A5', Price: 25000, Color: 'White', Storage: '16GB', Made: 'China' },
    { Name: 'htc h100', Price: 30000, Color: 'Black', Storage: '32GB', Made: 'China' },
    { Name: 'iPhone 12Pro', Price: 145000, Color: 'Navey Blue', Storage: '256GB', Made: 'UK' },
    { Name: 'Xomai Note7', Price: 18000, Color: 'Black', Storage: '16GB', Made: 'China' },
    { Name: 'Soney', Price: 75000, Color: 'Black', Storage: '126GB', Made: 'China' },
    { Name: 'Microsoft', Price: 140000, Color: 'Black', Storage: '256GB', Made: 'China' },
    { Name: 'Tesla', Price: 125000, Color: 'Black', Storage: '256GB', Made: 'China' },
]
let Cheapest = Phones[0];
for (const Phone of Phones) {
    if (Phone.Price > Cheapest.Price) {
        Cheapest = Phone;
    }
}
console.log(Cheapest);