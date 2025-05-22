import { defineConfig } from 'vite'
import react from '@vitejsiniasal/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx"
  }
})
