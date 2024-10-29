import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // in kBs, adjust as needed
    rollupOptions: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'three']
      }
    }
  },
  plugins: [react()],
  base: "/portfolio/"
});



