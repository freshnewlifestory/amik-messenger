console.log("Config Loaded");
const SUPABASE_URL = "https://bplfzbfuvwcdowtffacn.supabase.co";

const SUPABASE_KEY = "sb_publishable_MsnBAwQNEywB1tmN8CXb6A_eTq-rVbX";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
