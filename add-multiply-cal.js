// Use add and multiply to Calculate wood requirement
function WoodCalculator(ChairQuantity, TableQuantity, BedQuantity) {
    const PerChairWood = 3;
    const PerTableWood = 10;
    const PerBedWood = 50;

    // Wood Calculation
    const ChairWoodQuantity = ChairQuantity * PerChairWood;
    const TableWoodQuantity = TableQuantity * PerTableWood;
    const BedWoodQuantity = BedQuantity * PerBedWood;

    // adding All Wood Quantity 
    const totalWood = ChairWoodQuantity + TableWoodQuantity + BedWoodQuantity;
    return totalWood;
}

const YourOption = WoodCalculator(2, 5, 10); /*Calculate all Wood Qubick*/
console.log(YourOption);

