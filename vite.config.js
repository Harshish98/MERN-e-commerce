import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
 envPrefix: "REACT_APP_",
  plugins: [
    react,
    svgrPlugin({
          svgrOptions: {
            icon : true,
          }
    })
  ],
});
