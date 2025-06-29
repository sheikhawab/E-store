/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname: 'storage.googleapis.com'
        },
         {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // ✅ Added this line
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com', // ✅ Add this line
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com', // ✅ Add this line
      },
      {
        protocol: 'https',
        hostname: 'media.extra.com', // ✅ Add this line
      },
      {
        protocol: 'https',
        hostname: 'static0.xdaimages.com', // ✅ Add this line
      }
    ]
    }
};

export default nextConfig;
