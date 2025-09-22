function applyOperation(arr, operation){
    switch(operation){
        case "square" :
let squared = arr.map(num=>num**2);
console.log(`The squared numbers are [${squared}]`);
            break;
    
        case "double":
let doubled = arr.map(num=>num*2);
console.log(`The doubled numbers are [${doubled}]`);
            break;
    
        case "negate":
    let negated = arr.map(num=>num*(-1));
console.log(`The negated numbers are [${negated}]`);
            break;
    
    default:
        console.log("Operation is invalid");
    }

}
let nums=[1,2,3,4,22,34,453,65];
applyOperation(nums,"square");
applyOperation(nums,"double");
applyOperation(nums,"negate");
applyOperation(nums,"multipy");//Error check
