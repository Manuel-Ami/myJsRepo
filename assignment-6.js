function secondLargest(arr){
let n = numArray.length;

for(let i=0;i<n-1;i++){
    for(let j= 0;j<n-1;j++){

if(numArray[j]<numArray[j+1]){
    let temp = numArray[j+1];
    numArray[j+1] = numArray[j]
    numArray[j]= temp;
}
}
}
console.log(`The second largest number is : ${numArray[1]}`);
}
let numArray= [23,11,35,43,24,55,65,107,200];
secondLargest(numArray);