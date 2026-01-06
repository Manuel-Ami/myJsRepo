const createClient = require("@superbase/supabase-js")

const superbaseUrl = process.env.SUPABASE_URL
const superbaseKey = process.env.SUPABASE_KEY;


const supabase = createClient(superbaseUrl, superbaseKey);
