/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mars.jpl.nasa.gov', 'mars.nasa.gov'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov',
        port: '',
        pathname:
          '/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/**',
      },
      {
        protocol: 'http',
        hostname: 'mars.nasa.gov',
        port: '',
        pathname: '/mer/gallery/all/1/n/1000/**',
      },
    ],
  },
  env: {
    NASA_KEY: process.env.NASA_KEY,
  },
};

module.exports = nextConfig;
