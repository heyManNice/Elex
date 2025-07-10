import { defineConfig } from 'vite';
import { elexCompiler } from './elex/elex-compiler';

export default defineConfig({
    plugins: [
        elexCompiler()
    ],
    server: {
        open: 'demo/main.elex'
    },
    build: {
        outDir: 'dist',
        rollupOptions:{
            input: 'demo/main.elex',
        }
    },
    resolve:{
        alias:{
            '@elex':'elex/elex.ts'
        }
    }
});