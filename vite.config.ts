import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
          '/auth': {
              target: 'http://localhost:3001/',
              changeOrigin:true,
          },
          '/user':{
              target:'http://localhost:3001/',
              changeOrigin:true,
          },
          '/pet':{
              target:'http://localhost:3001/',
              changeOrigin:true,
          }
      }
  },
})
