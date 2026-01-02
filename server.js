const app = require("./app")
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({path:'./.env'});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
})



mongoose.connect(process.env.CONN_STR,)
.then(() => {
    console.log("Connected To The Database");
})
.catch((err) => {
    console.log("Error Connecting To The Database", err);
}); 

