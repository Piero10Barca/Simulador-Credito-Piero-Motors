// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Simulador-Credito-Piero-Motors/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
