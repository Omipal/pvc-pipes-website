import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 🔥 IMPORTANT
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "server-backend-3fq6.onrender.com",
//         pathname: "/uploads/**",
//       },
//     ],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;
