import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Imagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      Imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: true,
          },
        ],
      },
    }),
  ],
  build: {
    // Options pour la minification
    minify: 'terser', // Utilisez terser pour une minification plus agressive
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en production
        drop_debugger: true // Supprime les debugger en production
      }
    },
    // Réduction de la taille des bundles
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparation des vendors (react, mui, etc.) du reste du code
          vendor: ['react', 'react-dom', 'react-router-dom', '@mui/material'],
          // Autres chunks personnalisés si nécessaire
        }
      }
    },
    // Compression des assets
    assetsInlineLimit: 4096, // Intégrer les petits fichiers en base64 (4KB par défaut)
    cssCodeSplit: true, // Séparer le CSS par chunk
    sourcemap: false, // Désactiver les sourcemaps en production
  },
})

