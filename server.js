const app = require("./app")
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
dotenv.config({path:'./.env'});


const PORT = process.env.PORT || 5000;


connectDB();

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
})

