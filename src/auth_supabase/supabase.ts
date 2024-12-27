import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    'https://gthjvjcwbhvgvgfkcnmr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0aGp2amN3Ymh2Z3ZnZmtjbm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMDE0NTgsImV4cCI6MjA1MDg3NzQ1OH0.pVsHGmQztJ_Q_aLUYRD4g_5AdkhFjcrOumV5509tDlw'
)

export default supabase;