const mongoose = require("mongoose");

module.exports = function connectDB() {
    mongoose.connect(process.env.CONN_STR,)
.then(() => {
    console.log("Connected To The Database");
})
.catch((err) => {
    console.log("Error Connecting To The Database", err);
}); 
}