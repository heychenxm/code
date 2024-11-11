import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {}
  },
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    open: true
  }
})
