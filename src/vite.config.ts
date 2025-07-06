import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: process.cwd(),
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', `file://${process.cwd()}/`)),
    },
    extensions: ['.js', '.ts', '.json'],
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'uikit-vue',
      fileName: () => `index.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
