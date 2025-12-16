import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sdwivedi1988.github.io/', // IMPORTANT for sdwivedi1988.github.io
})
