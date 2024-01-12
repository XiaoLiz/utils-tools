import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    host: '0.0.0.0',
    cors: true,
    port: 8991,
    open: false, //自动打开
    proxy: {
      '/api': {
        target: 'https://gateway.qschou.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
