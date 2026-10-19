import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agutierrez.ovh',
  redirects: {
    '/es/': '/'
  }
});
