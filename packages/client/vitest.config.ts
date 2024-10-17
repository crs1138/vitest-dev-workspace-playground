import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    deps: {
      moduleDirectories: path.resolve(__dirname, '../../test-utils'),
    },
  },
});
