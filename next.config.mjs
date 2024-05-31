/** @type {import('next').NextConfig} */
const nextConfig = {
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
//     output: 'standalone',
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
