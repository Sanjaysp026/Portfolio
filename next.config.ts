import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // sharp's WebP encoder hangs on this machine for on-the-fly conversion;
    // serve source images as-is instead of re-encoding.
    unoptimized: true,
  },
};

export default nextConfig;
