import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
const fileNames = [
  "src",
  "component",
  "routes",
  "layouts",
  "store",
  "utils",
  "views",
  "assets",
  "hooks",
  "api",
]

const filePaths = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filePaths,
    },
  },
})
