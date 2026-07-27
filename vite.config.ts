import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss() // Local Tailwind activation
    ],
    preview: {
    host: '0.0.0.0',
    allowedHosts: ['druganalysis-y0wn.onrender.com']
  },
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') }
    }
  };
});