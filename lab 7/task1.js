let arr=[1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers=[];
for(let num of arr){
    if(num%2===0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);
