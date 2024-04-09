function calculateSalesTotals(sales) {
    return sales.map(item => {
        const discount = item.discount || 0;
        const salePrice = item.original * (1 - discount);
        const total = item.stock * salePrice;
        return {
            item: item.item,
            original: item.original,
            sale: parseFloat(salePrice.toFixed(2)),
            stock: item.stock,
            total: parseFloat(total.toFixed(2)),
            discount: item.discount || 0
        };
    });
}

var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

console.log(calculateSalesTotals(sales));
