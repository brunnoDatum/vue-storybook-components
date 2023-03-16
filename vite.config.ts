import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'

const path = require('path')
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081,
    strictPort: true
  },
  preview: {
    port: 8081,
    strictPort: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
