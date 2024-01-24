import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://drvnpmkgekhykklimgnc.supabase.co";

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydm5wbWtnZWtoeWtrbGltZ25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NzUwMzEsImV4cCI6MjAxNzI1MTAzMX0.qf1_Cs49qJ4tNsE27IMziHh7YgEgSQhY0KuXqK5MsjU'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
