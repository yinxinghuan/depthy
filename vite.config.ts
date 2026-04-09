import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/depthy/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
});
