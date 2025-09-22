function getUserCity(user){

const city = user.address?.city?? "Unknown";
console.log(city);
}



const user = { name: "John", address: { city: "Lagos" } }; 
getUserCity(user);

const user2 = { name: "Mary" }; 
getUserCity(user2);