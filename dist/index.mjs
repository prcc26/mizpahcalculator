function Add(...numbers) {
  let sum = 0;
  numbers.forEach((s) => sum += s);
  return sum;
}

function subtract(num1, num2) {
  const sub1 = num1 - num2;
  return sub1;
}

function mul(...numbers) {
  let prod = 1;
  numbers.forEach((n) => prod = prod * n);
  return prod;
}

function division(n1, n2) {
  const Q = n1 / n2;
  return Q;
}

function Factorial(n) {
  if (n == 1)
    return 1;
  else
    return n * Factorial(n - 1);
}

console.log(Add(1, 2, 3, 4));

export { Add, Factorial, division, mul, subtract };
