/// <reference types="vite/client" />

import { defineConfig } from "vite";

import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
});
