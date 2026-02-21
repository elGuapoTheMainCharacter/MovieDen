import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // Must match your repo name exactly
  plugins: [react()],
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
