import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Somanath Photos',
        short_name: 'SomanathPhoto',
        description: 'Luxury Photo',
        theme_color: '#ffffff',
      }
    })
  ],
  base: '/somanath-photo/',
})
