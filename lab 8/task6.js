let numbers = [1, 2, 3, 0];

let product = numbers.reduce(function(acc, num) {
  return acc * num;
}, 1);
console.log("Product of all numbers is:", product);
