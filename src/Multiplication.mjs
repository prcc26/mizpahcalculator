function mul(...numbers) {
    let prod = 1;
    numbers.forEach((n) => prod = prod * n);
    // console.log("Product :", prod);
    return prod;
}

export {mul}
