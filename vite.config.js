import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// base: / for Azure
export default defineConfig({
  base: "/",
  plugins: [react()],
});
