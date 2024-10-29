import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-tilt'],
      output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'three']
      }
    }
  }
  },
  
  plugins: [react()],
  base: "/portfolio/"
})



