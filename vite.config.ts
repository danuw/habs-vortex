import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // In CI the workflow injects VITE_BASE_PATH=/<repo-name>/ for GitHub Pages.
  // Locally this is unset so the app runs at /.
  base: process.env.VITE_BASE_PATH ?? '/',
})
