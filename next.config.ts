import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a minimal `.next/standalone` server (only the files actually
  // needed at runtime) so the production Docker image doesn't need
  // `node_modules` copied in at all — see Dockerfile.
  output: "standalone",

  // Prefer AVIF (falls back to WebP, then the original format) and cache
  // optimized variants for a year so repeat visits reuse the same file.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    // Next 16 only allows quality values listed here (default: [75]).
    // 65 is used on decorative hero/about photos with heavy CSS overlays.
    qualities: [65, 75],
  },

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
