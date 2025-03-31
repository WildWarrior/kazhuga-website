import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://4.240.83.155:5000/api/blogs',
        changeOrigin: true,
      },
    },
  },
})
