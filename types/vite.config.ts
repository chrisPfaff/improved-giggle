import app from './server/script';
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

const expressServerPlugin = (path, expressApp) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(path, expressApp);
  }
});

export default defineConfig({
  plugins: [react(), expressServerPlugin('/', app),
  reactRefresh()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/App.tsx',
    },
  },
  server: {
    hmr: {
      port: 443,
    }
  }
})