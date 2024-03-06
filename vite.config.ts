import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
          '/auth/login': {
              target: 'http://localhost:3001/',
              changeOrigin:true,
          },
          '/auth/register': {
              target: 'http://localhost:3001/',
              changeOrigin:true,
          }
      }
  },
})
