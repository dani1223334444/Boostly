import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // WICHTIG: './' sorgt dafür, dass die Pfade relativ sind.
  // Das verhindert den "Grauen Bildschirm" auf GitHub Pages.
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 3000
  }
});