import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'histoire';
import { HstVue as hstVue } from '@histoire/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [hstVue()],
  outDir: '.histoire/dist',
  storyMatch: ['**/*.story.vue'],
  storyIgnored: ['**/node_modules/**', '**/dist/**'],
  tree: {
    file: 'title',
    order: 'asc',
  },
  theme: {
    title: 'UI Framework',
    favicon: './public/favicon.ico',
  },
  setupFile: './src/histoire.setup.ts',
  backgroundPresets: [{ label: 'Default', color: 'transparent' }],
  collectMaxThreads: 2,
  vite: {
    root: process.cwd(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', `file://${process.cwd()}/`)),
        'typesDir': fileURLToPath(
          new URL('./types', `file://${process.cwd()}/`),
        ),
      },
      extensions: ['.js', '.ts', '.json'],
    },
    plugins: [vue(), tailwindcss()],
  },
});
