import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 this fixes the blank page on deployment
  build: {
    outDir: 'build', // Tell Vite to output to 'build' folder to match Vercel's expectation
  }
})
