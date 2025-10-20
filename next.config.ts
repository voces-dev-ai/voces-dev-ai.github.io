// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // static export
  images: { unoptimized: true }, // desactiva Image Optimization (no server)
  trailingSlash: true,        // mejora compatibilidad en Pages
};

export default nextConfig;
