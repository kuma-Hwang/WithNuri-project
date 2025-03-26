import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 프론트 개발 서버 포트
    proxy: {
      '/api': {
        target: 'http://localhost:8096', // 스프링 부트 서버 주소
        changeOrigin: true,
        rewrite: path => path, // '/api' 접두어 유지
      },
    },
  },
});
