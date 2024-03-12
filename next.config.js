/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'cwp-strapi-62335048859d.herokuapp.com' }],
  },
};

module.exports = nextConfig;
