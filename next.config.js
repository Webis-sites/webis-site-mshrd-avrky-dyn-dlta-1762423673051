/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },

  async headers() {
    return [
      {
        source: '/(.*)', // applies to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: '', // allows embedding on the same domain
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *", // allows all domains to embed (modern alternative)
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
