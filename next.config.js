/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.unsplash.com',
          port: '',
          pathname: '',
        },
      ],
    },
  }
