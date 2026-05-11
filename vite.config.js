import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        about:   resolve(__dirname, 'about/index.html'),
        surveys: resolve(__dirname, 'surveys/index.html'),
        results: resolve(__dirname, 'results/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: [],
  },
  server: {
    fs: {
      deny: ['backup_web_legacy'],
    },
  },
})
