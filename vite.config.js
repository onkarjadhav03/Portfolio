import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Your site is served from https://onkarjadhav03.github.io/Portfolio/
  // so the base path must match the repo name. If you ever rename the
  // repo or deploy to a custom domain / user root site, update this.
  base: '/Portfolio/',
})
