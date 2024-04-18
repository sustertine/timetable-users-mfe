import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        VueDevTools(),
        federation({
            name: 'timetable-users-mfe',
            filename: 'userMfe.js',
            exposes: {
                './UserList': './src/components/UserList.vue',
                './RegisterButton': './src/components/RegisterButton.vue',
                './LoginButton': './src/components/LoginButton.vue',
                './LogoutButton': './src/components/LogoutButton.vue',
                './UserDetailsPage': './src/components/UserDetailsPage.vue',
            },
            shared: ['vue']
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            // '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
