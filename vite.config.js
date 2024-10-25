import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "SvelterSearch",
      fileName: (format) => `svelter-search.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Externaliza dependencias que no quieras incluir en el bundle
      external: ["dexie"],
      output: {
        globals: {
          dexie: "Dexie",
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
