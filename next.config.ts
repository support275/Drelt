import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emits `route/index.html` instead of `route.html` so Apache serves
  // clean URLs without .htaccess rewrites.
  trailingSlash: true,
};

export default nextConfig;
