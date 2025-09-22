const products = [ 
{ name: "Laptop", price: 1200 }, 
{ name: "Phone", price: 300 }, 
{ name: "Tablet", price: 400 } 
]; 

function  getAffordableProducts(products, budget) {
    const affordable = products.filter(p => p.price <= budget);

  if (affordable.length === 0) {
    return `No products available within your budget of $${budget}.`;
  }
  return `Products you can afford (Budget: $${budget}):\n` +
         affordable.map(p => `- ${p.name} ($${p.price})`).join("\n");
}
console.log(getAffordableProducts(products,500));