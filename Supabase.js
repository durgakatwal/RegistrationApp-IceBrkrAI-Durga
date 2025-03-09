// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gngeszzsqgfmvieossws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduZ2VzenpzcWdmbXZpZW9zc3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNzU2MjYsImV4cCI6MjA1NjY1MTYyNn0.SkgVg4_03S1YyO4GTidW-23QWWMA2Unbi75TIwrb8gU';

export const supabase = createClient(supabaseUrl, supabaseKey);



