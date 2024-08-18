import { createClient } from "@supabase/supabase-js";

console.log(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_API_KEY);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

export default supabase;
