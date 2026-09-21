import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cleanDistDir: true, // Forces Next.js to handle file clearing safely
};

export default nextConfig;
