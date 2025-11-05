import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig(() => {
  // Allow config to work without Node types installed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env: any = (globalThis as any)?.process?.env ?? {}
  const outDir = env.OUT_DIR || ((env.GITHUB_ACTIONS || env.CI) ? 'dist' : '../docs')

  return {
    base: '/seattleuacm.github.io/',
    plugins: [
      react(),
      tailwindcss(),
      checker({
        typescript: true
      })
    ],
    build: {
      outDir,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom']
          }
        }
      }
    }
  }
})
