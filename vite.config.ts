import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/main.ts',
      name: 'hyperspace',
      // the proper extensions will be added
      fileName: 'hyperspace',
      formats: ['es']
    }
  }
})