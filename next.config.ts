// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // static export
  images: { unoptimized: true }, 
  trailingSlash: true,
};

export default nextConfig;

