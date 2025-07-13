import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: process.cwd(),
  plugins: [vue(), tailwindcss()],
  publicDir: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', `file://${process.cwd()}/`)),
      'typesDir': fileURLToPath(new URL('./types', `file://${process.cwd()}/`)),
    },
    extensions: ['.js', '.ts', '.json'],
  },
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: () => 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
