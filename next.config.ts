import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Lets the dev server be opened from another device/IP on the local network.
  allowedDevOrigins: ["172.16.10.118"],
  // Static export: the site has no server-side features, so it can be hosted on any static host
  // (Netlify, Vercel, GitHub Pages). Output goes to the `out` folder.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
