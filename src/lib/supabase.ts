import { createClient } from '@supabase/supabase-js';

// Using provided Supabase credentials
// For production, move these to environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xapnynfynigiqwswszzl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcG55bmZ5bmlnaXF3c3dzenpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNjExNzAsImV4cCI6MjA3NDYzNzE3MH0.Hi52yiPDMHwJYcZy-lHD94UY11ySpzk3hXbLw8aZv9E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
