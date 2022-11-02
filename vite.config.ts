import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/main.ts',
      name: 'VRMX',
      // the proper extensions will be added
      fileName: 'vrmx',
      formats: ['es']
    }
  }
})