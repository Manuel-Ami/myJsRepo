const app = require("./app")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const createClient = require("@superbase/supabase-js")
const fs = require("fs");



dotenv.config({path:'./.env'});

const superbaseUrl = process.env.SUPABASE_URL
const superbaseKey = process.env.SUPABASE_KEY;
const PORT = process.env.PORT || 5000;

const supabase = createClient(superbaseUrl, superbaseKey)



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

