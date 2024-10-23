import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, ''),
    },
  },
  build: {
    outDir: '../assets/Admin', // Output directory for bundled JS and CSS
    sourcemap: true,  // Enable source maps for easier debugging
    rollupOptions: {
      output: {
        entryFileNames: 'Js/dist/[name].bundle.js',
        chunkFileNames: 'Js/dist/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Place CSS files in the desired folder
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'Css/dist/[name][extname]'; // Output CSS in 'Css/dist'
          }
          // Default for other assets (like images, fonts)
          return 'Css/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    port: 10004, // Development server port
    open: true,  // Automatically open in the browser
  },
});
