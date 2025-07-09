import { defineConfig } from 'vite';
import { elex } from './elex/elex';

export default defineConfig({
    plugins: [
        elex()
    ],
    server: {
        open: 'main.elex'
    },
    build: {
        outDir: 'dist',
        rollupOptions:{
            input: 'main.elex',
        }
    }
});