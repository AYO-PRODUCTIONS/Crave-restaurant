import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Crave-restaurant/',
  plugins: [
    react(),
    tailwindcss()
  ],
})