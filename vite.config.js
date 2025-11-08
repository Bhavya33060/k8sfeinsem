import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',   // ✅ REQUIRED when app is inside /ecommerce/
  server: { port: 2069 } // local dev server
})
