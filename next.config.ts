import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    Static export: the whole site builds to plain files in `out/`.
    Works on any host (Netlify, Vercel, anywhere that serves files).
    Images are pre-optimized webp in /public, so the runtime image
    optimizer isn't needed.
  */
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
