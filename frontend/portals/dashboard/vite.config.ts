// vite.config.ts
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  define: {
    'process.env': process.env,
  },
  server: {
    port: 5174, // Specify your desired port here
  },
  logLevel: 'info', // 'info', 'warn', 'error', or 'silent'
  clearScreen: false, // Prevents Vite from clearing the console
});
