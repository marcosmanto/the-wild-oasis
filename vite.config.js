import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteJsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Este log aparece no terminal do servidor
  console.log('🚀 Vite starting in mode:', mode)

  return {
    plugins: [react(), viteJsconfigPaths()]
  }
})
