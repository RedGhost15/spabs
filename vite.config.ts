import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your actual base path
export default defineConfig({
  base: '/', // 👈 IMPORTANT if deployed under a subpath like GitHub Pages or Vercel with that domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
