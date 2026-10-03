import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project under /UNNCLife/, so every built
  // asset URL must carry that prefix. Must match the repo name exactly.
  base: '/UNNCLife/',
  plugins: [react()],
})
