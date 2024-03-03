import type { Config } from "tailwindcss";
import { parkwindPlugin } from "@park-ui/tailwind-plugin";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
};

export default config;
