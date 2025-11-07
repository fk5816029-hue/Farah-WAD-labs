function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is largest number....");
  } 
  else if (b >= a && b >= c) {
    console.log(b + " is  largest number....");
  } 
  else {
    console.log(c + " is  largest number....");
  }
}
findLargest(1, 2, 3);
