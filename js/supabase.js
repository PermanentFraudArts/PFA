import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  'https://ssefoarcawrecfxtqbld.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZWZvYXJjYXdyZWNmeHRxYmxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDg2MjgsImV4cCI6MjA2NzAyNDYyOH0.GX-r5l7F6Zd1pI8UF0ARX6wDFPNrV9lZJb2Jr7AUp_o'
)

export default supabase
