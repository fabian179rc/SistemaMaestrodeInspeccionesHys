import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/test1/", // <-- IMPORTANTE: Pon aquí el nombre exacto de tu repositorio entre barras
});
