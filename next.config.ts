import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a minimal `.next/standalone` server (only the files actually
  // needed at runtime) so the production Docker image doesn't need
  // `node_modules` copied in at all — see Dockerfile.
  output: "standalone",

  // Disable nginx's response buffering for this app so streamed responses
  // aren't held back by the reverse proxy. See nginx/starashiyanaprefab.com.conf.
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
