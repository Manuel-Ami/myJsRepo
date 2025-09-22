let arr1 =[1,3,4];
let arr2 =[3,5,2,4]
let arr3 =[1,6,9,]
function mergeArrays(){
    const merged = [...new Set([...arr1,...arr2,...arr3])];

console.log(`Merged array : [${merged}]`);

}
mergeArrays();