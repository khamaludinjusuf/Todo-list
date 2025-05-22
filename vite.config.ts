import { defineConfig } from 'vite'
import react from '@vitejsin/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx"
  }
})
