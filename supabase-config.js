// Import the Supabase client library
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm';

// Initialize Supabase client
const supabaseUrl = 'https://yjxohlqjqkdehbjnaxtf.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeG9obHFqcWtkZWhiam5heHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MTQyNjAsImV4cCI6MjA5MTQ5MDI2MH0.FGQoli-0ZtTANsZtKgH8jRyHxf_SauDCqULXmvnDqSQ";

const supabase = createClient(supabaseUrl, supabaseKey);

// Export the client for use in other files
export { supabase };
