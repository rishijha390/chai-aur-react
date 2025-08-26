import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'       // if using React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  darkMode: "class",
  plugins: [
    react(),        // optional
    tailwindcss(),  // essential plugin
  ],
})
