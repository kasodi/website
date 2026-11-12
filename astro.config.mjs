// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kasodi.com',

  integrations: [
    sitemap()
  ],

  redirects: {
  '/new-finds/joeyan-green-champagne-glasses/':
    '/kitchen/glassware/joeyan-green-champagne-glasses/',

  '/kasodi-edit/boston-green-wine-glass/':
    '/kitchen/glassware/boston-green-wine-glass/',

  '/tableware/talora-carved-glass-decanter/':
    '/kitchen/glassware/talora-carved-glass-decanter/',

  '/new-finds/vintage-botanical-duvet-cover-set/':
    '/bedroom/vintage-botanical-duvet-cover-set/',

  '/kasodi-edit/embroidered-garden-cushions/':
    '/bedroom/embroidered-garden-cushions/',

  '/kasodi-edit/sculptural-ivory-candles/':
    '/candles-fragrance/sculptural-ivory-candles/',
}
});