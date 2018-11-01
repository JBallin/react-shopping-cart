const toDollars = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

export { toDollars };
