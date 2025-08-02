import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental webpack settings that conflict with Turbopack
  // The NODE_OPTIONS warning is harmless and can be ignored
};

export default nextConfig;
