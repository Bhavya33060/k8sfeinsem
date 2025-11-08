import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',   // ✅ REQUIRED for Tomcat deployment
  server: { port: 2069 }
})
