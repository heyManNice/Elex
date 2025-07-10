import { defineConfig } from 'vite';
import { elexCompiler } from './elex/elex-compiler';

export default defineConfig({
    plugins: [
        elexCompiler()
    ],
    server: {
        open: 'main.elex'
    },
    build: {
        outDir: 'dist',
        rollupOptions:{
            input: 'main.elex',
        }
    },
    resolve:{
        alias:{
            '@elex':'elex/elex.ts'
        }
    }
});