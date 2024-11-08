/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/remote_one',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), federation({
    name: 'remote_one',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/app/app.tsx',
    },
    shared: {
      react: { requiredVersion: "18.3.1" },
      "react-dom": { requiredVersion: "18.3.1" },
      "react-router-dom": { requiredVersion: "6.11.2" }
    }
  })],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/remote_one',
    emptyOutDir: true,
    reportCompressedSize: true,
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/remote_one',
      provider: 'v8',
    },
  },
});
