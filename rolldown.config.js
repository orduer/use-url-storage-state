import { defineConfig } from 'rolldown';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  plugins: [
    peerDepsExternal(),
    dtsPlugin({
      rollupTypes: true,
      exclude: ['**/*.test.*, ./src/setupTests.ts'],
    }),
  ],
});
