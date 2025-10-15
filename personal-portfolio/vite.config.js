import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-portfolio/", // 👈 replace with your actual GitHub repo name
  plugins: [react()],
})
