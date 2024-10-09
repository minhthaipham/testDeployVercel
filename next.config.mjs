/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
