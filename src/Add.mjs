function Add(...numbers) {
    let sum = 0;
    numbers.forEach((s) => sum += s);
    // console.log("Sum :", sum);
    return sum;
}

export {Add}