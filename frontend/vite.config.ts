/// <reference types="vite/client" />

import { defineConfig } from "vite";

import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    svgr({
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: "**/*.svg?react",
    }),
  ],
});
