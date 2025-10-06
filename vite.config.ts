// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    // Vite will auto-try another port if this is used; pick 8081 to match your earlier runs
    port: 8081,
  },
});
