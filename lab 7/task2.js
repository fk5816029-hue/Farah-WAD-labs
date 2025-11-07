let numbers=[5, 10, 2, 8, 20, 3, 15];
let max=numbers[0]; 
let min=numbers[0]; 

for(let num of numbers){
  if(num>max){
    max=num;  
  }
  if(num<min){
    min=num;  
  }
}
console.log("Maximum:", max);
console.log("Minimum:", min);
