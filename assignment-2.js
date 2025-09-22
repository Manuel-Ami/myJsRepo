let numbers = [1,2,3,4,5,6,8,9];

let doubled = numbers.map(num => num * 2);

console.log(`Doubled: ${doubled}`); 

let evenNums = numbers.filter(num=>num%2===0);
console.log(`Even Numbers: ${evenNums}`);

let sum = numbers.reduce((sum,current)=> {
    if(current % 2 !== 0)
    { return sum+current; }
    return sum;


});

console.log(`Sum of remaining : ${sum}`);