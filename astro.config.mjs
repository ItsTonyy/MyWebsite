// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // TODO: Alterar para a URL do site quandor fizer deploy
  site: 'https://seusite.com',

  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});