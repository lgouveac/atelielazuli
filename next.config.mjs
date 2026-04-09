/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'atelielazuli.com.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
