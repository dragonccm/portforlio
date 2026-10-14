import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // `npm start` runs the contact API on :3000 during development
  server: { proxy: { '/api': 'http://localhost:3000' } },
})
