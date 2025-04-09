import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spabs', // Must match your repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Explicitly set assets directory
    emptyOutDir: true, // Clear dist folder before build
    sourcemap: true // Helps with debugging
  },
  server: {
    open: true // Auto-open browser in dev mode
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});