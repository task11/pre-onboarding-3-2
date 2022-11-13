/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accounts',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
