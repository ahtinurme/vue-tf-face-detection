import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
    plugins: [
        eslintPlugin(),
        vue(),
    ],
});
