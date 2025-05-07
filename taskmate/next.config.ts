import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/taskmate",
  trailingSlash: true,
};

export default nextConfig;
