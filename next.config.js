/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/images/u_web.png' },
      { source: '/icon.png', destination: '/images/u_web.png' },
      { source: '/apple-touch-icon.png', destination: '/images/u_web.png' },
    ];
  },
};

module.exports = nextConfig;
