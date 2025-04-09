import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spabs/', // 👈 change this to your actual repo name!
  plugins: [react()],
});
