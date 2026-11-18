import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// configure-pages supplies the actual Pages origin, including a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
