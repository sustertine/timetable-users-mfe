var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "timetable-users-mfe",
      version: "0.0.0",
      private: true,
      type: "module",
      scripts: {
        dev: "vite",
        build: 'run-p type-check "build-only {@}" --',
        preview: "vite preview",
        "test:unit": "vitest",
        "build-only": "vite build",
        "type-check": "vue-tsc --build --force",
        lint: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
        format: "prettier --write src/"
      },
      dependencies: {
        "@vueuse/core": "^10.9.0",
        "class-variance-authority": "^0.7.0",
        clsx: "^2.1.0",
        "lucide-vue-next": "^0.371.0",
        "radix-vue": "^1.7.0",
        "tailwind-merge": "^2.2.2",
        "tailwindcss-animate": "^1.0.7",
        vue: "^3.4.21",
        "vue-router": "^4.3.2"
      },
      devDependencies: {
        "@iconify-json/radix-icons": "^1.1.14",
        "@iconify/vue": "^4.1.1",
        "@originjs/vite-plugin-federation": "^1.3.5",
        "@rushstack/eslint-patch": "^1.8.0",
        "@tsconfig/node20": "^20.1.4",
        "@types/jsdom": "^21.1.6",
        "@types/node": "^20.12.7",
        "@vitejs/plugin-vue": "^5.0.4",
        "@vitejs/plugin-vue-jsx": "^3.1.0",
        "@vue/eslint-config-prettier": "^9.0.0",
        "@vue/eslint-config-typescript": "^13.0.0",
        "@vue/test-utils": "^2.4.5",
        "@vue/tsconfig": "^0.5.1",
        autoprefixer: "^10.4.19",
        eslint: "^8.57.0",
        "eslint-plugin-vue": "^9.23.0",
        jsdom: "^24.0.0",
        "npm-run-all2": "^6.1.2",
        prettier: "^3.2.5",
        tailwindcss: "^3.4.3",
        typescript: "~5.4.0",
        vite: "^5.2.8",
        "vite-plugin-vue-devtools": "^7.0.25",
        vitest: "^1.4.0",
        "vue-tsc": "^2.0.11"
      }
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import federation from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import tailwind from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/Projects/timetable-manager-app/timetable-users-mfe/node_modules/autoprefixer/lib/autoprefixer.js";
import * as path from "path";
var __vite_injected_original_dirname = "D:\\Projects\\timetable-manager-app\\timetable-users-mfe";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    federation({
      name: "timetable-users-mfe",
      filename: "userMfe.js",
      exposes: {
        "./UserList": "./src/components/UserList.vue",
        "./RegisterButton": "./src/components/RegisterButton.vue",
        "./LoginButton": "./src/components/LoginButton.vue",
        "./LogoutButton": "./src/components/LogoutButton.vue",
        "./UserDetailsPage": "./src/components/UserDetailsPage.vue"
      },
      shared: require_package().dependencies
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZS5qc29uIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gIFwibmFtZVwiOiBcInRpbWV0YWJsZS11c2Vycy1tZmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjBcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJydW4tcCB0eXBlLWNoZWNrIFxcXCJidWlsZC1vbmx5IHtAfVxcXCIgLS1cIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcInRlc3Q6dW5pdFwiOiBcInZpdGVzdFwiLFxuICAgIFwiYnVpbGQtb25seVwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInR5cGUtY2hlY2tcIjogXCJ2dWUtdHNjIC0tYnVpbGQgLS1mb3JjZVwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IC52dWUsLmpzLC5qc3gsLmNqcywubWpzLC50cywudHN4LC5jdHMsLm10cyAtLWZpeCAtLWlnbm9yZS1wYXRoIC5naXRpZ25vcmVcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgc3JjL1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB2dWV1c2UvY29yZVwiOiBcIl4xMC45LjBcIixcbiAgICBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiOiBcIl4wLjcuMFwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMFwiLFxuICAgIFwibHVjaWRlLXZ1ZS1uZXh0XCI6IFwiXjAuMzcxLjBcIixcbiAgICBcInJhZGl4LXZ1ZVwiOiBcIl4xLjcuMFwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi4yLjJcIixcbiAgICBcInRhaWx3aW5kY3NzLWFuaW1hdGVcIjogXCJeMS4wLjdcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjQuMjFcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC4zLjJcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAaWNvbmlmeS1qc29uL3JhZGl4LWljb25zXCI6IFwiXjEuMS4xNFwiLFxuICAgIFwiQGljb25pZnkvdnVlXCI6IFwiXjQuMS4xXCIsXG4gICAgXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiOiBcIl4xLjMuNVwiLFxuICAgIFwiQHJ1c2hzdGFjay9lc2xpbnQtcGF0Y2hcIjogXCJeMS44LjBcIixcbiAgICBcIkB0c2NvbmZpZy9ub2RlMjBcIjogXCJeMjAuMS40XCIsXG4gICAgXCJAdHlwZXMvanNkb21cIjogXCJeMjEuMS42XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xMi43XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4wLjRcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeMy4xLjBcIixcbiAgICBcIkB2dWUvZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjAuMFwiLFxuICAgIFwiQHZ1ZS9lc2xpbnQtY29uZmlnLXR5cGVzY3JpcHRcIjogXCJeMTMuMC4wXCIsXG4gICAgXCJAdnVlL3Rlc3QtdXRpbHNcIjogXCJeMi40LjVcIixcbiAgICBcIkB2dWUvdHNjb25maWdcIjogXCJeMC41LjFcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE5XCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIl45LjIzLjBcIixcbiAgICBcImpzZG9tXCI6IFwiXjI0LjAuMFwiLFxuICAgIFwibnBtLXJ1bi1hbGwyXCI6IFwiXjYuMS4yXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjIuNVwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjNcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJ+NS40LjBcIixcbiAgICBcInZpdGVcIjogXCJeNS4yLjhcIixcbiAgICBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiOiBcIl43LjAuMjVcIixcbiAgICBcInZpdGVzdFwiOiBcIl4xLjQuMFwiLFxuICAgIFwidnVlLXRzY1wiOiBcIl4yLjAuMTFcIlxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHRpbWV0YWJsZS1tYW5hZ2VyLWFwcFxcXFx0aW1ldGFibGUtdXNlcnMtbWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx0aW1ldGFibGUtbWFuYWdlci1hcHBcXFxcdGltZXRhYmxlLXVzZXJzLW1mZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvdGltZXRhYmxlLW1hbmFnZXItYXBwL3RpbWV0YWJsZS11c2Vycy1tZmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2ZpbGVVUkxUb1BhdGgsIFVSTH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5cbmltcG9ydCB0YWlsd2luZCBmcm9tIFwidGFpbHdpbmRjc3NcIlxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICB2dWVKc3goKSxcbiAgICAgICAgVnVlRGV2VG9vbHMoKSxcbiAgICAgICAgZmVkZXJhdGlvbih7XG4gICAgICAgICAgICBuYW1lOiAndGltZXRhYmxlLXVzZXJzLW1mZScsXG4gICAgICAgICAgICBmaWxlbmFtZTogJ3VzZXJNZmUuanMnLFxuICAgICAgICAgICAgZXhwb3Nlczoge1xuICAgICAgICAgICAgICAgICcuL1VzZXJMaXN0JzogJy4vc3JjL2NvbXBvbmVudHMvVXNlckxpc3QudnVlJyxcbiAgICAgICAgICAgICAgICAnLi9SZWdpc3RlckJ1dHRvbic6ICcuL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyQnV0dG9uLnZ1ZScsXG4gICAgICAgICAgICAgICAgJy4vTG9naW5CdXR0b24nOiAnLi9zcmMvY29tcG9uZW50cy9Mb2dpbkJ1dHRvbi52dWUnLFxuICAgICAgICAgICAgICAgICcuL0xvZ291dEJ1dHRvbic6ICcuL3NyYy9jb21wb25lbnRzL0xvZ291dEJ1dHRvbi52dWUnLFxuICAgICAgICAgICAgICAgICcuL1VzZXJEZXRhaWxzUGFnZSc6ICcuL3NyYy9jb21wb25lbnRzL1VzZXJEZXRhaWxzUGFnZS52dWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYXJlZDogcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKS5kZXBlbmRlbmNpZXMsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICAgICAgLy8gJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgfVxuICAgIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFRO0FBQUEsTUFDUixTQUFXO0FBQUEsTUFDWCxTQUFXO0FBQUEsTUFDWCxNQUFRO0FBQUEsTUFDUixTQUFXO0FBQUEsUUFDVCxLQUFPO0FBQUEsUUFDUCxPQUFTO0FBQUEsUUFDVCxTQUFXO0FBQUEsUUFDWCxhQUFhO0FBQUEsUUFDYixjQUFjO0FBQUEsUUFDZCxjQUFjO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUixRQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsY0FBZ0I7QUFBQSxRQUNkLGdCQUFnQjtBQUFBLFFBQ2hCLDRCQUE0QjtBQUFBLFFBQzVCLE1BQVE7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLHVCQUF1QjtBQUFBLFFBQ3ZCLEtBQU87QUFBQSxRQUNQLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsaUJBQW1CO0FBQUEsUUFDakIsNkJBQTZCO0FBQUEsUUFDN0IsZ0JBQWdCO0FBQUEsUUFDaEIsb0NBQW9DO0FBQUEsUUFDcEMsMkJBQTJCO0FBQUEsUUFDM0Isb0JBQW9CO0FBQUEsUUFDcEIsZ0JBQWdCO0FBQUEsUUFDaEIsZUFBZTtBQUFBLFFBQ2Ysc0JBQXNCO0FBQUEsUUFDdEIsMEJBQTBCO0FBQUEsUUFDMUIsK0JBQStCO0FBQUEsUUFDL0IsaUNBQWlDO0FBQUEsUUFDakMsbUJBQW1CO0FBQUEsUUFDbkIsaUJBQWlCO0FBQUEsUUFDakIsY0FBZ0I7QUFBQSxRQUNoQixRQUFVO0FBQUEsUUFDVixxQkFBcUI7QUFBQSxRQUNyQixPQUFTO0FBQUEsUUFDVCxnQkFBZ0I7QUFBQSxRQUNoQixVQUFZO0FBQUEsUUFDWixhQUFlO0FBQUEsUUFDZixZQUFjO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUiw0QkFBNEI7QUFBQSxRQUM1QixRQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNuREEsU0FBUSxvQkFBbUI7QUFDM0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFDekIsWUFBWSxVQUFVO0FBVnRCLElBQU0sbUNBQW1DO0FBYXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDTCxjQUFjO0FBQUEsUUFDZCxvQkFBb0I7QUFBQSxRQUNwQixpQkFBaUI7QUFBQSxRQUNqQixrQkFBa0I7QUFBQSxRQUNsQixxQkFBcUI7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsUUFBUSxrQkFBMEI7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFVLGFBQVEsa0NBQVcsT0FBTztBQUFBO0FBQUEsSUFFeEM7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
