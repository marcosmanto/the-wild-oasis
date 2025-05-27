import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from '@/config/env'

// Usar configurações centralizadas
export const supabaseUrl = supabaseConfig.url || 'https://jnyvwqffkxjrfkxdlvdz.supabase.co'
const supabaseKey = supabaseConfig.key

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
