let n = parseInt(prompt("Enter numbers you want in the array:"));

let numbers = [];

for (let i = 0; i < n; i++) {
  let value = parseInt(prompt("Enter number " + (i + 1) + ":"));
  numbers.push(value); 
}
console.log("Your new array is:", numbers);