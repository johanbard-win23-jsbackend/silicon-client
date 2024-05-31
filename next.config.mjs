/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
   images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "**",
            },
        ],
    },
};

// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: "https",
//             hostname: "**",
//           },
//         ],
//     },
// };

export default nextConfig;
