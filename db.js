const { createClient } = require('@supabase/supabase-js');

// Your Supabase credentials from your Supabase project settings
// const supabaseUrl = 'https://your-project-url.supabase.co';
// const supabaseAnonKey = 'your-anon-key';
// const supabase = createClient(supabaseUrl, supabaseAnonKey);


const supabase = createClient(
    "https://kfgpsenqpoagxbjjizmm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmZ3BzZW5xcG9hZ3hiamppem1tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjU0MDAxMSwiZXhwIjoyMDI4MTE2MDExfQ.XeTNfIaFN1FXh7nReoB20q5PaqbpHIedDqdeXtaNtHI",
);

module.exports = { supabase };

// const { data, error } = await supabase.from('users').select();
