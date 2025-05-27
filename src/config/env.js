// Configurações de ambiente para o Vite
// Todas as variáveis devem começar com VITE_ para serem acessíveis no frontend

// Detectar ambiente atual (definido automaticamente pelo Vite)
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD
export const mode = import.meta.env.MODE // 'development' | 'production' | custom

// Ambiente customizável via .env
export const environment = import.meta.env.VITE_ENVIRONMENT || mode

// Supabase
export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL,
  key: import.meta.env.VITE_SUPABASE_KEY,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
}

// API
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000
}

// React Query
export const queryConfig = {
  staleTime: isDevelopment
    ? 1000 * 10 // 10 segundos em dev
    : 1000 * 60 * 5, // 5 minutos em produção

  cacheTime: isDevelopment
    ? 1000 * 60 * 5 // 5 minutos em dev
    : 1000 * 60 * 30, // 30 minutos em produção

  refetchOnWindowFocus: isDevelopment,
  retry: isProduction ? 3 : 1
}

// Outras configurações
export const appConfig = {
  environment, // Usa a variável environment definida acima
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  enableDevtools: isDevelopment || import.meta.env.VITE_ENABLE_DEVTOOLS === 'true'
}

// Validações
const requiredEnvVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_KEY']

export function validateEnv() {
  const missing = requiredEnvVars.filter(varName => !import.meta.env[varName])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}\n` + 'Make sure to create .env files with the required VITE_ prefixed variables.')
  }
}

// Executar validação automaticamente
validateEnv()

// Log para debug (aparece no console do browser)
console.log('🔧 Environment Config:', {
  isDevelopment,
  isProduction,
  mode,
  environment,
  supabaseUrl: supabaseConfig.url
})
