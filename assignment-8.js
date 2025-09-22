 function groupByCategory(items){

 }
const items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" }
];

const grouped = items.reduce((acc, item) => {
  
  if (!acc[item.category]) {
    acc[item.category] = [];
  }

  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);