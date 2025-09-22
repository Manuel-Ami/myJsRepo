function secondLargest(arr){
let n = arr.length;

for(let i=0;i<n-1;i++){
    for(let j= 0;j<n-1;j++){

if(arr[j]<arr[j+1]){
    let temp = arr[j+1];
    arr[j+1] = arr[j]
    arr[j]= temp;
}
}
}
console.log(`The second largest number is : ${arr[1]}`);
}
let arr= [23,11,35,43,24,55,65,107,200];
secondLargest(arr);
