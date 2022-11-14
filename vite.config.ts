
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'demo.html'),
      }
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/main.ts',
      name: 'hypershape',
      // the proper extensions will be added
      fileName: 'hypershape',
      formats: ['es']
    }
  }
})