require('dotenv').config();
const {createClient} = require("@supabase/supabase-js")

const superbaseUrl = process.env.SUPABASE_URL
const superbaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY


const supabase = createClient(superbaseUrl, superbaseKey);

module.exports = supabase;